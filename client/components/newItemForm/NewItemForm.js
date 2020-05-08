import { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import FinalStep from "./FinalStep";
import FormDiv from "./styles";
import { uploadImages } from "../../lib/api";

// const CREATE_ITEM_MUTATION = gql`
//     mutation CREATE_ITEM_MUTATION(
//         $title: String,
//     )
// `;

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
};

const NewItemForm = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState(formData);
  const [images, setImages] = useState([]);

  // Get data from the form wizard
  const getStepOneValues = (values) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        ...values,
      };
    });
  };
  const getStepTwoValues = (values) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        ...values,
      };
    });
  };
  const getFinalStepValues = (values) => {
    const { parcelType, price } = values;
    setFormValues((prevState) => {
      return {
        ...prevState,
        parcelType,
        price,
      };
    });
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
    await getFinalStepValues(values);

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
        onSubmit={getStepOneValues}
        customUpload={onUpload}
      />
    ),
    2: (
      <StepTwo
        onSubmit={getStepTwoValues}
        decreaseStep={() => setStep((prevStep) => prevStep - 1)}
        increaseStep={() => setStep((prevStep) => prevStep + 1)}
      />
    ),
    3: (
      <FinalStep
        decreaseStep={() => setStep((prevStep) => prevStep - 1)}
        onSubmit={handleUpload}
      />
    ),
  };

  return (
    <FormDiv>
      <div>
        <h3>Étape {step}/3</h3>
        {STEPS_ENUM[step]}
      </div>
    </FormDiv>
  );
};

export default NewItemForm;
