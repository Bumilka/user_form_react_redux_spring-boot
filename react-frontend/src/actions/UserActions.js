import axios from "axios";
import {
    GET_ERRORS,
    GET_USERS,
    DELETE_USER,
  } from "./types";

export const addUserItem = (user, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/board", user);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

export const getUserList = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/board/all");
    dispatch({
        type: GET_USERS,
        payload: res.data
    });
};

export const deleteUser = user_id => async dispatch => {
  
    if (
      window.confirm(
        `Do you want to delete user: ${user_id}`
      )
    ) {
      await axios.delete(`http://localhost:8080/api/board/${user_id}`);
      dispatch({
        type: DELETE_USER,
        payload: user_id
      });
    }
  };
  