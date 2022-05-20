import React, {useRef} from "react";
import Answer from "../../models/answer";

const CreateAnswer: React.FC<{onAddAnswer: (answer: Answer) => void}> = (props) => {
    const textBodyTextHandlerRef = useRef<HTMLInputElement>(null);

    const submitAnswerHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredTextBody = textBodyTextHandlerRef.current!.value;
        const answer = new Answer(enteredTextBody);

        props.onAddAnswer(answer);
    }
  return (
    <div>
      <form onSubmit={submitAnswerHandler}>
        <div className="form-group">
          <label>Text</label>
          <input type="text" ref={textBodyTextHandlerRef}/>
        </div>
        <div className="form-toggle">
            <button type="submit">Add</button>
            <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAnswer;
