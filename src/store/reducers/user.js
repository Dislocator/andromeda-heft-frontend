const initialState = {
  loading: false,
  firstName: "a",
  lastName: "a",
  email: "a",
  profession: "prof1",
  company: "a",
  chiefName: "a",
  keyword: "a",
  keywords: [""],
  subjects: [""],
  learningStartDate: new Date(),
  learningFinishDate: new Date(),
};

const generatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_INFO:
      return fetchUserInfo(state, action);
    default:
      return state;
  }
};

export default reducer;
