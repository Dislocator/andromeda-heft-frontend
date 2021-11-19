export const keywordsAddStart = () => {
  return {
    type: actionTypes.KEYWORDS_ADD_START,
    //error: error //not implemented yet
  };
};

export const keywordsAddSuccess = (keywords) => {
  return {
    type: actionTypes.KEYWORDS_UPDATE_SUCCESS,
    keywords: keywords,
  };
};

export const keywordsAddFail = (error) => {
  return {
    type: actionTypes.KEYWORDS_UPDATE_FAIL,
    error: error,
  };
};

export const keywordsAdd = (keywords) => {
  return (dispatch) => {
    dispatch(keywordsAddStart());
    const user = JSON.stringify(localstorage.getItem("user"));
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    let url = "http:4000/localhost/keywords";
    axios
      .post(url, keywords, config)
      .then((response) => {
        dispatch(keywordsAddSuccess(responce.data));
        localstorage.setItem("user", response.data);
      })
      .catch((error) => {
        dispatch(keywordsAddFail(error.response.data));
      });
  };
};
