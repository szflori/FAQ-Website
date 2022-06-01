import { Button, TextField } from "@mui/material";
import { Container } from "@mui/system";
import { getByTitle } from "@testing-library/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CancelButton, OkButton } from "../../assets/Styles/Button/Button";
import { TextInput } from "../../assets/Styles/TextField/TextField";
import { Question } from "../../models/question";
import { AuthContext } from "../../store/auth-context";
import { QuestionContext } from "../../store/question-context";

import "./CreateQuestionStyle.css";

const CreateQuetionComponent: React.FC = () => {
  const questionCtx = useContext(QuestionContext);
  const authCtx = useContext(AuthContext);
  const [title, setTitle] = useState<string>();
  const [enteredTitleText, setEnteredTitleText] = useState<string>();
  const [enteredDescriptionText, setEnteredDescriptionText] =
    useState<string>();
  const navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id === "_new") {
      setTitle("Ask Question");
      return;
    } else {
      setTitle("Edit Question");
      questionCtx.items.find((item) => {
        if (item.id === id) {
          setEnteredTitleText(item.title);
          setEnteredDescriptionText(item.description);
        }
      });
    }
  }, []);

  const saveOrUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    if (id === "_new") {
      const question: Question = {
        id: Math.round(Math.floor(Math.random() * 100)).toString(),
        title: enteredTitleText!,
        description: enteredDescriptionText!,
        userID: authCtx.profile!.id,
      };
      questionCtx.onAdd(question);
      navigation("/");
    } else {
      const question: Question = {
        id: id!,
        title: enteredTitleText!,
        description: enteredDescriptionText!,
        userID: authCtx.profile!.id,
      };
      questionCtx.onUpdate(id!, question);
      navigation("/");
    }
  };

  const cancelAddQuestionHandler = () => {
    navigation("/");
  };

  return (
    <Container maxWidth="sm">
      <div className="item-container">
        <h2>{title}</h2>
        <form>
          <TextInput
            label="Title"
            multiline
            defaultValue={enteredTitleText}
            onChange={(e) => setEnteredTitleText(e.target.value)}
          />
          <TextInput
            label="Description"
            defaultValue={enteredDescriptionText}
            multiline
            rows={7}
            onChange={(e) => setEnteredDescriptionText(e.target.value)}
          />

          <OkButton variant="contained" onClick={saveOrUpdate}>
            Add
          </OkButton>
          <CancelButton variant="outlined" onClick={cancelAddQuestionHandler}>
            Cancel
          </CancelButton>
        </form>
      </div>
    </Container>
  );
};

export default CreateQuetionComponent;
