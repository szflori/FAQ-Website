import {
  Checkbox,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CancelButton, OkButton } from "../../assets/Styles/Button/Button";
import { TextInput } from "../../assets/Styles/TextField/TextField";
import { Question } from "../../models/question";
import { AuthContext } from "../../store/auth-context";
import { CategoryContext } from "../../store/category-context";
import { QuestionContext } from "../../store/question-context";

import "./CreateQuestionStyle.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CreateQuetionComponent: React.FC = () => {
  const questionCtx = useContext(QuestionContext);
  const authCtx = useContext(AuthContext);
  const categoryCtx = useContext(CategoryContext);
  const [title, setTitle] = useState<string>();
  const [enteredTitleText, setEnteredTitleText] = useState<string>();
  const [selectedTagText, setSelectedTagText] = useState<string[]>([]);
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
          setSelectedTagText(item.tag);
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
        tag: selectedTagText,
      };
      questionCtx.onAdd(question);
      navigation("/");
    } else {
      const question: Question = {
        id: id!,
        title: enteredTitleText!,
        description: enteredDescriptionText!,
        userID: authCtx.profile!.id,
        tag: selectedTagText,
      };
      questionCtx.onUpdate(id!, question);
      navigation("/");
    }
  };

  const tagHandleChange = (
    event: SelectChangeEvent<typeof selectedTagText>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedTagText(typeof value === "string" ? value.split(",") : value);
  };

  const cancelAddQuestionHandler = () => {
    navigation("/");
  };

  const converterHandler = (selectedItems: string[]) => {
    const titleList = selectedItems.map(
      (select) => categoryCtx.items.find((item) => item.id === select)?.title
    );
    return titleList;
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
          <Select
            variant="outlined"
            sx={{
              border: "1px solid #efefef",
              color: "#fff",
              "&:hover, &:focus": {
                border: "1px solid #00ff80",
              },
            }}
            multiple
            value={selectedTagText}
            onChange={tagHandleChange}
            renderValue={(selected) => converterHandler(selected).join(", ")}
            MenuProps={MenuProps}
          >
            {categoryCtx.items.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                <ListItemText primary={item.title} />
              </MenuItem>
            ))}
          </Select>
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
