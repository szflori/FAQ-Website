import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Question } from "../../models/question";
import { AuthContext } from "../../store/auth-context";
import { QuestionContext } from "../../store/question-context";

const CreateQuetionComponent: React.FC = () => {
  const questionCtx = useContext(QuestionContext);
  const authCtx = useContext(AuthContext);
  const [enteredTitleText, setEnteredTitleText] = useState<string>();
  const [enteredDescriptionText, setEnteredDescriptionText] =
    useState<string>();
  const navigation = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id === "_new") {
      return;
    } else {
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
        userID: authCtx.profile!.id
      };
      questionCtx.onUpdate(id!, question);
      navigation("/");
    }
  };

  const cancelAddQuestionHandler = () => {
    navigation("/");
  };

  return (
    <div>
      <form onSubmit={saveOrUpdate}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          value={enteredTitleText}
          onChange={(e) => setEnteredTitleText(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={enteredDescriptionText}
          onChange={(e) => setEnteredDescriptionText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateQuetionComponent;
