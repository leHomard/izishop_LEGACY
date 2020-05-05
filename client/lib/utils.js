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

export const itemColors = [
  { key: "Noir", value: "black" },
  { key: "Argenté", value: "#C0C0C0" },
  { key: "Bleu marine", value: "#35358d" },
  { key: "Bleu", value: "blue" },
  { key: "Bleu clair", value: "#89cff0" },
  { key: "Menthe", value: "#a2ffbc" },
  { key: "Pistache", value: "#c0ff64" },
  { key: "Vert", value: "#369a3d" },
  { key: "Vert foncé", value: "green" },
  { key: "Kaki", value: "#86814a" },
  { key: "Marron", value: "#663300" },
  { key: "Moutarde", value: "#e5b539" },
  { key: "Jaune", value: "yellow" },
  { key: "Doré", value: "#DAA520" },
  { key: "Violet", value: "#800080" },
  { key: "Mauve", value: "#d297d2" },
  { key: "Rose", value: "#ffccca" },
  { key: "Blanc", value: "white" },
  { key: "Crème", value: "#f8f8e1" },
  { key: "Beige", value: "#f4e0c8" },
  { key: "Abricot", value: "#ffcc98" },
  { key: "Orange", value: "#ffa500" },
  { key: "Corail", value: "coral" },
  { key: "Rouge", value: "red" },
];
