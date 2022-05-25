import Question from "./question";
import User from "./user";

class Answer {
  id: number;
  user: User;
  question: Question;
  answerBody: string;
  likeCount: number | undefined;
  dislikeCount: number | undefined;

  constructor(
    user: User,
    question: Question,
    body: string,
    likeCount: number,
    dislikeCount: number
  ) {
    this.id = Math.random();
    this.user = user;
    this.question = question;
    this.answerBody = body;
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
  }
}

export default Answer;
