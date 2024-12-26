import { createSlice } from "@reduxjs/toolkit";

const TOAST_TIMEOUT = 1600;
const initialState = {
  title: "",
  timeOut: TOAST_TIMEOUT,
  isActive: false,
};

const toastReducer = createSlice({
  name: "toast",
  initialState: [],
  reducers: {
    showToastAction(state, action) {
      return { ...initialState, ...action.payload };
    },
    hideToastAction() {
      return initialState;
    },
  },
});
export const { showToastAction, hideToastAction } = toastReducer.actions;
export default toastReducer.reducer;
