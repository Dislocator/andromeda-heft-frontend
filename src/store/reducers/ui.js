import { updateObject } from "../utility";
import * as actionTypes from "../actions/actionTypes";
const initialState = {
  sidebar: false,
  generatorForm: false,
};
const openSidebar = (state, action) => {
  return updateObject(state, { sidebar: true });
};

const closeSidebar = (state, action) => {
  return updateObject(state, { sidebar: false });
};

const openGenerator = (state, action) => {
  return updateObject(state, { generatorForm: true });
};
const ui = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.OPEN_SIDEBAR:
      return openSidebar(state, action);
    case actionTypes.CLOSE_SIDEBAR:
      return closeSidebar(state, action);
    case actionTypes.OPEN_GENERATOR_FORM:
      return openGenerator(state, action);
    default:
      return state;
  }
};

export default ui;
