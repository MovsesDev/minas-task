import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../feautures/todoSlice";

const store = configureStore({
    reducer: {
        todos: todoSlice
    }
})

export default store

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
