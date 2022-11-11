import * as yup from "yup";

export const formSchema = yup.object().shape({
  user: yup
    .string()
    .required("Nome de usuário é obrigatório.")
    .max(50, "Máximo de 50 caracteres"),
});
