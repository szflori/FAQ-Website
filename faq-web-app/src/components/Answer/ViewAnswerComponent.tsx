import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnswerContext } from "../../store/answer-context";
import { AuthContext } from "../../store/auth-context";

const ViewAnswerComponent: React.FC<{
  id: string;
  text: string;
  userID: string;
}> = (props) => {
  const answerCtx = useContext(AnswerContext);
  const authCtx = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [dislikeCount, setDislikeount] = useState<number>(0);
  const [username, setUsername] = useState<string>();
  const navigation = useNavigate();

  useEffect(() => {
    authCtx.users.find((user) => {
      if (user.id === props.userID) {
        setUsername(user.username);
      }
    });
  }, [username]);

  const deleteHandler = (id: string) => {
    answerCtx.onRemove(id);
  };

  const modifyHandler = (id: string) => {
    navigation(`/item_answer/${id}`);
  };

  return (
    <li>
      <span>{username}</span>
      <p>{props.text}</p>
      <button onClick={deleteHandler.bind(null, props.id)}>DELETE</button>
      <button onClick={modifyHandler.bind(null, props.id)}>MOD</button>

      <button onClick={() => setLikeCount(likeCount + 1)}>
        {likeCount}Like
      </button>
      <button onClick={() => setDislikeount(dislikeCount + 1)}>
        {dislikeCount}Dislike
      </button>
    </li>
  );
};

export default ViewAnswerComponent;
