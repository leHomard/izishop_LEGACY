import { useEffect, useState } from "react";

export const useForm = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {}, [value, loading, error]);

  return {
    value,
    loading,
    error,
  };
};
