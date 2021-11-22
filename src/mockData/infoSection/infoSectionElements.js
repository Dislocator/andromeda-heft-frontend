export const infoObjects = [
  {
    id: "about",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: "",
    headLine: "Berichtsheftgenerator",
    description:
      "Andromeda wird fuer dich den Berichtsheft automatisch erstellen!",
    buttonLabel: "Erstellen!",
    imgStart: false,
    img: require("../../resource/images/todo.svg").default,
    dark: true,
    primary: true,
    darkText: false,
  },
  {
    id: "generator",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: "",
    headLine: "Wie wird das gemacht?",
    description:
      "Du gibst bis zu 20 Schluesselwoerter und Andromeda erstellt auf Basis dessen deinen KOMPLETTEN Berichtsheft!",
    buttonLabel: "Probieren",
    imgStart: true,
    img: require("../../resource/images/todo.svg").default,
    dark: false,
    primary: false,
    darkText: true,
  },
];
