import { useState } from "react";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import FinalStep from "./FinalStep";
import FormDiv from "./styles";

const NewItemForm = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});

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

  console.log("test Value : ", formValues);

  // choose which step to render in form
  const STEPS_ENUM = {
    1: (
      <StepOne
        increaseStep={() => setStep((prevStep) => prevStep + 1)}
        onSubmit={getStepOneValues}
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
        onSubmit={getFinalStepValues}
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
