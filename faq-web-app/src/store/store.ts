import { configureStore } from "@reduxjs/toolkit";
import { answerReducer } from "./reducers/answer-slice";
import { authReducer } from "./reducers/auth-slice";
import { categoryReducer } from "./reducers/category-slice";
import { questionReducer } from "./reducers/question-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    question: questionReducer,
    answer: answerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
