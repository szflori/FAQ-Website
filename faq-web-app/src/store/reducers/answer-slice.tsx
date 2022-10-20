import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Test_Answer } from "../../DUMMY_DATA";
import { Answer } from "../../models/answer";

interface AnswerState {
  items: Answer[];
  questionID: string | undefined;
}

const initialState: AnswerState = {
  items: Test_Answer,
  questionID: undefined,
};

export const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    getQuestionID: (state, action: PayloadAction<string>) => {
      state.questionID = action.payload;
    },
    addAnswer: (state, action: PayloadAction<Answer>) => {
      state.items.concat(action.payload);
    },
    updateAnswer: (
      state,
      action: PayloadAction<{ id: string; answer: Answer }>
    ) => {
      const newList = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload.answer;
        }
        return item;
      });
      state.items = newList;
    },
    deleteAnswer: (state, action: PayloadAction<string>) => {
      const newList = state.items.filter((item) => item.id !== action.payload);
      state.items = newList;
    },
  },
});

export const { getQuestionID, addAnswer, updateAnswer, deleteAnswer } =
  answerSlice.actions;

export const answerReducer = answerSlice.reducer;
