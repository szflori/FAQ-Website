import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Answer } from "../../models/answer";
import { AnswerContext } from "../../store/answer-context";
import { AuthContext } from "../../store/auth-context";

const CreateAnswerComponent: React.FC = () => {
  const answerCtx = useContext(AnswerContext);
  const authCtx = useContext(AuthContext);
  const [enteredAnswerText, setEnteredAnswerText] = useState<string>();
  const navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id === "_new") {
      return;
    } else {
      answerCtx.items.find((item) => {
        if (item.id === id) {
          setEnteredAnswerText(item.text);
        }
      });
    }
  }, []);

  const saveOrUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    if (id === "_new") {
      const answer: Answer = {
        id: Math.round(Math.floor(Math.random() * 100)).toString(),
        userID: authCtx.profile!.id,
        questionID: answerCtx.questionID!,
        text: enteredAnswerText!,
        likeCount: 0,
        dislikeCount: 0,
      };
      answerCtx.onAdd(answer);
      navigation(`/item_list/${answerCtx.questionID!}`); // TO DO ID Question
    } else {
      const answer: Answer = {
        id: id!,
        userID: authCtx.profile!.id,
        questionID: answerCtx.questionID!,
        text: enteredAnswerText!,
        likeCount: 0,
        dislikeCount: 0,
      };
      answerCtx.onUpdate(id!, answer);
      navigation(`/item_list/${answerCtx.questionID!}`); // TO DO ID Question
    }
  };

  return (
    <div>
      <form>
        <label>Text</label>
        <input
          type="text"
          placeholder="Text"
          value={enteredAnswerText}
          onChange={(e) => setEnteredAnswerText(e.target.value)}
        />
        <button onClick={saveOrUpdate}>Add</button>
      </form>
    </div>
  );
};

export default CreateAnswerComponent;
