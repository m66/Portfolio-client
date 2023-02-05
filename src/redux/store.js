import { configureStore } from "@reduxjs/toolkit";
import modeReducer from './features/modes/modes'

export const store = configureStore({
    reducer: {
        mode: modeReducer
    }
});