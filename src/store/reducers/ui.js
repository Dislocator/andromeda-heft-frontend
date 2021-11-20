import { updateObject } from "../utility";
import * as actionTypes from "../actions/actionTypes";
const initialState = {
  sidebar: false,
};
const openSidebar = (state, action) => {
  console.log(state);
  return updateObject(state, { sidebar: true });
};

const closeSidebar = (state, action) => {
  console.log(state);
  return updateObject(state, { sidebar: false });
};
const ui = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case actionTypes.OPEN_SIDEBAR:
      return openSidebar(state, action);
    case actionTypes.CLOSE_SIDEBAR:
      return closeSidebar(state, action);
    default:
      return state;
  }
};

export default ui;
