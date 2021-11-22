import * as actionTypes from "./actionTypes";

export const openSidebar = () => {
  return {
    type: actionTypes.OPEN_SIDEBAR,
  };
};

export const closeSidebar = () => {
  return {
    type: actionTypes.CLOSE_SIDEBAR,
  };
};

export const openGeneratorForm = () => {
  return {
    type: actionTypes.OPEN_GENERATOR_FORM,
  };
};
