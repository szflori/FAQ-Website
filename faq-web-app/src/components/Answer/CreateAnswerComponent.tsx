import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { OkButton } from "../../assets/Styles/Button/Button";
import { TextInput } from "../../assets/Styles/TextField/TextField";
import { Answer } from "../../models/answer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addAnswer, updateAnswer } from "../../store/reducers/answer-slice";
import { loggedProfile } from "../../store/reducers/auth-slice";

import "./CreateAnswerStyle.css";

const CreateAnswerComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const answers = useAppSelector((state) => state.answer.items);
  const profile = useAppSelector(loggedProfile);
  const questionID = useAppSelector((state) => state.answer.questionID);
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
      answers.find((item) => {
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
        userID: profile!.id,
        questionID: questionID!,
        text: enteredAnswerText!,
        likeCount: 0,
        dislikeCount: 0,
      };
      dispatch(addAnswer(answer));
      navigation(`/item_list/${questionID}`); // TO DO ID Question
    } else {
      const answer: Answer = {
        id: id!,
        userID: profile!.id,
        questionID: questionID!,
        text: enteredAnswerText!,
        likeCount: 0,
        dislikeCount: 0,
      };
      dispatch(updateAnswer({ id: id!, answer }));
      navigation(`/item_list/${questionID}`); // TO DO ID Question
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
