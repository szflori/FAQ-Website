import React, { useRef } from "react";
import Question from "../../models/question";

import "./questionForm.css";

const QuestionForm: React.FC<{onAddQuestion: (question: Question) => void}> = (props) => {
  const titleTextHandlerRef = useRef<HTMLInputElement>(null);
  const bodyTextHandlerRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTitle = titleTextHandlerRef.current!.value;
    const enteredBodyText = bodyTextHandlerRef.current!.value;
    const question = new Question(enteredTitle, enteredBodyText);

    props.onAddQuestion(question);

  };
  return (
    <div className="qf-container">
      <h2>Ask Question</h2>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" ref={titleTextHandlerRef}/>
        </div>
        <div className="form-group">
          <label>Body Text</label>
          <input type="text" ref={bodyTextHandlerRef}/>
        </div>
        <div className="form-toggle">
          <button type="submit">Ask</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;