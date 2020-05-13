import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({});

  function handleChange(e) {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    e.preventDefault();
    setValues((prevValues) => ({
      ...prevValues,
      [name]: val,
    }));
  }

  return {
    values,
    handleChange,
    setValues,
  };
};

export default useForm;
