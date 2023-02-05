import { createSlice } from "@reduxjs/toolkit";
import { DARK_MODE } from "../../../constants/const";

export const modeSlice = createSlice({
  name: "themeMode",
  initialState: {
    value: DARK_MODE,
  },
  reducers: {
    changeMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
