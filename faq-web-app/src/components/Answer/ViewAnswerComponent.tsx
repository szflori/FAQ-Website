import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ViewAnswerStyle.css";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ModeIcon from "@mui/icons-material/Mode";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { CancelButton, OkButton } from "../../assets/Styles/Button/Button";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loggedProfile } from "../../store/reducers/auth-slice";
import { deleteAnswer } from "../../store/reducers/answer-slice";

const ViewAnswerComponent: React.FC<{
  id: string;
  text: string;
  userID: string;
}> = (props) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.auth.users);
  const profile = useAppSelector(loggedProfile);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [dislikeCount, setDislikeount] = useState<number>(0);
  const [username, setUsername] = useState<string>();
  const [modify, setModify] = useState<boolean>(false);
  const navigation = useNavigate();

  useEffect(() => {
    users.find((user) => {
      if (user.id === props.userID) {
        setUsername(user.username);
      }
    });

    if (profile?.id === props.userID) {
      setModify(true);
    }
  }, [username]);

  const deleteHandler = (id: string) => {
    dispatch(deleteAnswer(id));
  };

  const modifyHandler = (id: string) => {
    navigation(`/item_answer/${id}`);
  };

  return (
    <li className="answer-container">
      <div className="answer-header">
        <span className="answer-title">{username}</span>
        {modify && (
          <div className="answer-op-toggle">
            <ModeIcon
              fontSize="medium"
              onClick={modifyHandler.bind(null, props.id)}
            >
              MOD
            </ModeIcon>
            <BackspaceIcon
              fontSize="medium"
              onClick={deleteHandler.bind(null, props.id)}
            >
              DELETE
            </BackspaceIcon>
          </div>
        )}
      </div>
      <div className="answer-main">
        <p>{props.text}</p>
      </div>
      <div className="answer-toggle">
        <OkButton
          variant="outlined"
          size="small"
          onClick={() => setLikeCount(likeCount + 1)}
          endIcon={<ThumbUpIcon />}
        >
          {likeCount}
        </OkButton>
        <CancelButton
          variant="outlined"
          size="small"
          onClick={() => setDislikeount(dislikeCount + 1)}
          endIcon={<ThumbDownAltIcon />}
        >
          {dislikeCount}
        </CancelButton>
      </div>
    </li>
  );
};

export default ViewAnswerComponent;
