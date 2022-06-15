import { Todo, Todos } from "./../interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MyObject {
  id: string;
  title: string;
}

interface MyObject2 {
  author: string;
  title: string;
}

const initialState: Todos = {
  todos: [],
};

const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<MyObject2>) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        completed: false,
        author : action.payload.author
      });
    },

    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo(state, action: PayloadAction<MyObject>) {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
        return todo
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoReducer.actions;
export default todoReducer.reducer;
