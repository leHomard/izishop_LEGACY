export function displayFormError(type) {
  let textError = "";

  if (type === "username") {
    textError = "Veuillez saisir votre nom d'utilisateur";
  } else if (type === "email") {
    textError = "Veuillez saisir votre adresse mail";
  } else if (type === "password") {
    textError = "Veuillez saisir votre mot de passe";
  } else {
    textError = "une erreur est survenue";
  }
  return textError;
}
