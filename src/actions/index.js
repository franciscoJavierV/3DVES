import axios from "axios";
export const setError = (payload) => ({
  type: "SET_ERROR",
  payload,
});

export { setError as default };
