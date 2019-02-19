import axios from "axios";

export const ADD_DATA = "addData";
export const ADD_EVENT = "addEvent";
export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const addData = racerslist => {
  return {
    type: ADD_DATA,
    payload: racerslist
  };
};

export const addEvent = event => {
  console.log("inaction", event);
  return {
    type: ADD_EVENT,
    payload: event
  };
};

export const fetchEvents = (id) => (dispatch, getState) => {
  axios
  .get(`http://127.0.0.1:8000/api/events/${id}`)
  .then(res => {
    console.log("infetch", res);
    dispatch(addEvent(res.data));
  })
  .catch(err => console.log(err))
}

export const fetchData = () => (dispatch, getState) => {
  axios
    .get("http://127.0.0.1:8000/api/racers/")
    .then(res => {
      console.log("infetch", res);
      dispatch(addData(res.data));
    })
    .catch(err => console.log(err));
};
