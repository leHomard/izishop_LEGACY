import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({});

  function handleChange(e) {
    console.log("IN");
    const { name, value } = e.target;
    e.preventDefault();
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return {
    values,
    handleChange,
    setValues,
  };
};

export default useForm;
