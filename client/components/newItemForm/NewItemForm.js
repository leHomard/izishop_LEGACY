import { useState } from "react";
import axios from "axios";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import FinalStep from "./FinalStep";
import FormDiv from "./styles";
import { endpoint } from "../../config";

const NewItemForm = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [uploadState, setUploadState] = useState({
    success: false,
    url: "",
    error: false,
    errorMessage: "",
  });

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

  console.log("files state : ", images);

  // handle upload images to amazon S3
  const handleUpload = () => {
    // loop over images in state
    for (let image of images) {
      const fileName = image.name;
      const fileType = image.type;

      // Get Amazon S3 signedRequest from server
      console.log("preparing the upload...");
      console.log("fileName : ", fileName);
      console.log("fileType : ", fileType);
      axios
        .post(`${endpoint}sign_s3`, {
          fileName,
          fileType,
        })
        .then((resp) => {
          const signedRequest = resp.data.data.returnData.signedRequest;
          const { url } = signedRequest;
          setUploadState({ url });
          console.log("received a signed request");

          // set header options
          const options = {
            headers: {
              "Content-Type": fileType,
            },
          };

          // upload image to amazon
          axios
            .put(signedRequest, image, options)
            .then((resp) => {
              console.log("Response from S3");
            })
            .catch((error) => {
              console.log(
                "error when uploading image to amazon s3 :" +
                  JSON.stringify(error)
              );
            });
        })
        .catch((error) => {
          console.log(
            "error when getting signed request :" + JSON.stringify(error)
          );
        });
    }
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
