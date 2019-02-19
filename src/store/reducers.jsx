import { ADD_DATA, ADD_EVENT } from "./actions";

const initState = {
  racers: [],
  event:{}
};

const reducer = (state = initState, action) => {
  console.log("inreducer", action.payload);
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        racers: action.payload
      };
    case ADD_EVENT:
      return {
        ...state,
        event: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
