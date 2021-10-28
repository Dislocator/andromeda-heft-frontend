import axios from "axios";
import { updateObject } from "../utility";

export const userUpdateStart = () => {
  return {
    type: actionTypes.USER_UPDATE_START,
    //error: error //not implemented yet
  };
};

export const userUpdateSuccess = (userData) => {
  return {
    type: actionTypes.USER_UPDATE_SUCCESS,
    userData: userData,
  };
};

export const userUpdateFail = (error) => {
  return {
    type: actionTypes.USER_UPDATE_FAIL,
    error: error,
  };
};

export const userUpdate = (values) => {
  return (dispatch) => {
    dispatch(userUpdateStart());
    const user = JSON.stringify(localstorage.getItem("user"));
    const config = {
      headers: { Authorization: `Bearer ${user.token}` },
    };
    let url = "http:4000/localhost/user/personal-info";
    axios
      .post(url, values, config)
      .then((responce) => {
        dispatch(userUpdateSuccess(responce.data));
        localstorage.setItem("user", responce.data);
      })
      .catch((error) => {
        dispatch(userUpdateFail(error.response.data));
      });
  };
};

// export const udpateEntity = (oldObject, values, url, config) => {
//     return (dispatch) => {

//         axios.post(url, values, config).then((response) => {
//             const updatedObject = updateObject(oldObject, values)

//         })
//     }
// }
