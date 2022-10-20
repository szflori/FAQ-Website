import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Test_Question } from "../../DUMMY_DATA";
import { Question } from "../../models/question";

interface QuestionState {
  items: Question[];
}

const initialState: QuestionState = {
  items: Test_Question,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.items.concat(action.payload);
    },
    updateQuestion: (
      state,
      action: PayloadAction<{ id: string; question: Question }>
    ) => {
      const newList = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.question;
        }
        return item;
      });
      state.items = newList;
    },
    deleteQuestion: (state, action: PayloadAction<{ id: string }>) => {
      const newList = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      state.items = newList;
    },
  },
});

export const { addQuestion, updateQuestion, deleteQuestion } = questionSlice.actions;

export const questionReducer = questionSlice.reducer;
