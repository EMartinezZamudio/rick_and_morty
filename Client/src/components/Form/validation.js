const REGEX_EMAIL = /^[a-zA-Z0-9._-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const REGEX_PASSWORD_CHAR = /^.{6,10}$/;
const REGEX_PASSWORD_NUM = /^(?=.*\d).+/;

const dataValidation = (data) => {
  const errors = {
    email: "",
    password: "",
  };

  if (!data.email) errors.email = "Campo requerido";
  else if (!REGEX_EMAIL.test(data.email)) errors.email = "El email es invalido";

  if (!data.password) errors.password = "Campo requerido";
  else if (!REGEX_PASSWORD_CHAR.test(data.password))
    errors.password = "La contraseña debe tener de 6 a 10 caracteres";
  else if (!REGEX_PASSWORD_NUM.test(data.password))
    errors.password = "La contraseña debe tener almenos un numero";

  return errors;
};

export default dataValidation;
