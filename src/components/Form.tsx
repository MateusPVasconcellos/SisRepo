import { useFormik } from "formik";
import React, { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import { formSchema } from "../schemas/FormSchema";

function Form() {
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const { search, error, isSearchLoading, setError } = useSearch();
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      user: "",
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      await search(values.user);
    },
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowErrors(true);
    handleSubmit(e);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
    setError("");
  };

  return (
    <form
      className="mt-10 flex flex-col items-center"
      onSubmit={(e) => onSubmit(e)}
    >
      <input
        className="flex w-3/4 rounded-md border border-gray-600 bg-gray-800 py-4 px-6 text-gray-100 md:w-2/4"
        type="text"
        required
        placeholder="Qual nome do usuário?"
        onChange={(e) => onChange(e)}
        value={values.user}
        name="user"
      />
      {showErrors && <span className="mt-2 text-red-500">{errors.user}</span>}
      {error && <span className="text-red-500">{error}</span>}
      <button
        className="mt-10 w-2/3 rounded bg-yellow-500 px-6 py-4 text-sm font-bold uppercase text-gray-900 hover:bg-yellow-600 md:w-2/5"
        type="submit"
      >
        {isSearchLoading ? "Carregando..." : "Pesquisar Repositórios"}
      </button>
    </form>
  );
}

export default Form;
