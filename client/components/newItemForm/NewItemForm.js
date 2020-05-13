import { useState, useEffect, Fragment } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import FinalStep from "./FinalStep";
import FormDiv, { Fieldset } from "./styles";
import { uploadImages } from "../../lib/api";
import FormSuccess from "./FormSuccess";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $brand: String!
    $description: String!
    $size: String!
    $color: String!
    $parcelType: String!
    $price: Float!
    $urls: [String!]
    $type: [Type!]
    $condition: [Condition!]
    $category: [Category!]
  ) {
    createItem(
      brand: $brand
      title: $title
      description: $description
      categories: { set: $category }
      type: { set: $type }
      size: $size
      color: $color
      condition: { set: $condition }
      imagesUrl: { set: $urls }
      parcelType: $parcelType
      user: { connect: { userName: "omar" } }
      price: $price
    ) {
      id
    }
  }
`;

// Initial state of the form data
const formData = {
  urls: [],
  brand: undefined,
  title: undefined,
  description: undefined,
  category: undefined,
  type: undefined,
  size: undefined,
  color: undefined,
  price: undefined,
  parcelType: undefined,
  condition: undefined,
};

const NewItemForm = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState(formData);
  const [images, setImages] = useState([]);
  const [addItem, { error, loading, data }] = useMutation(CREATE_ITEM_MUTATION);

  useEffect(() => {
    if (formValues.urls.length > 0) {
      formValues.urls[0].length !== 0 &&
        addItem({
          variables: {
            brand: formValues.brand,
            title: formValues.title,
            description: formValues.description,
            size: formValues.size,
            color: formValues.color,
            parcelType: formValues.parcelType,
            urls: formValues.urls[0],
            price: parseFloat(formValues.price),
            type: formValues.type,
            condition: formValues.condition,
          },
        });
    }
  }, [formValues.urls[0]]);

  // Get data from the form wizard
  const getFormStepsValues = (values) => {
    // exclude images from state
    if (!values.images) {
      setFormValues((prevState) => {
        return {
          ...prevState,
          ...values,
        };
      });
    }
  };

  const onUpload = ({ file, onSuccess }) => {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onSuccess("done", file);
      setImages((prevState) => [...prevState, file]);
    };
  };

  // handle upload images to amazon S3
  const handleUpload = async (values) => {
    // get the values from the final step form
    await getFormStepsValues(values);
    let urls = [];

    /* loop over images state and upload them
    then fill urls array by url of each image */
    for (let image of images) {
      const url = await uploadImages(image);
      urls = [...urls, url];
    }

    /* set the urls into the formValues state
    to pass it to the CREATE_ITEM_MUTATION */
    setFormValues((prevState) => {
      return {
        ...prevState,
        urls: [...prevState.urls, urls],
      };
    });
  };

  // choose which step to render in form
  const STEPS_ENUM = {
    1: (
      <StepOne
        increaseStep={() => setStep((prevStep) => prevStep + 1)}
        onSubmit={getFormStepsValues}
        customUpload={onUpload}
      />
    ),
    2: (
      <StepTwo
        onSubmit={getFormStepsValues}
        decreaseStep={() => setStep((prevStep) => prevStep - 1)}
        increaseStep={() => setStep((prevStep) => prevStep + 1)}
      />
    ),
    3: (
      <FinalStep
        decreaseStep={() => setStep((prevStep) => prevStep - 1)}
        increaseStep={() => setStep((prevStep) => prevStep + 1)}
        onSubmit={handleUpload}
      />
    ),
    4: !error && data ? <FormSuccess itemId={data.createItem.id} /> : null,
  };

  return (
    <Fragment>
      <FormDiv>
        <Fieldset disabled={loading} aria-busy={loading} />
        <div>
          {step <= 3 && <h3>Étape {step}/3</h3>}
          {STEPS_ENUM[step]}
        </div>
      </FormDiv>
    </Fragment>
  );
};

export default NewItemForm;
