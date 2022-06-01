import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OkButton } from "../../assets/Styles/Button/Button";
import { TextInput } from "../../assets/Styles/TextField/TextField";
import { Answer } from "../../models/answer";
import { AnswerContext } from "../../store/answer-context";
import { AuthContext } from "../../store/auth-context";

import "./CreateAnswerStyle.css";

const CreateAnswerComponent: React.FC = () => {
  const answerCtx = useContext(AnswerContext);
  const authCtx = useContext(AuthContext);
  const [title, setTitle] = useState<string>();
  const [enteredAnswerText, setEnteredAnswerText] = useState<string>();
  const navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id === "_new") {
      setTitle("Add Answer");
      return;
    } else {
      setTitle("Edit Answer");
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
    <Container maxWidth="sm">
      <div className="item-container">
        <h2>{title}</h2>
        <form>
          <TextInput
            label="Text"
            defaultValue={enteredAnswerText}
            multiline
            rows={7}
            onChange={(e) => setEnteredAnswerText(e.target.value)}
          />
          <OkButton onClick={saveOrUpdate}>Add</OkButton>
        </form>
      </div>
    </Container>
  );
};

export default CreateAnswerComponent;
