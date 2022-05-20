import Question from "./question";
import User from "./user";

class Answer{
    id: number;
    questionId: number;
    authorId: number;
    answerBody: string;
    likeCount: number;
    dislikeCount: number;

    constructor(question: Question, author: User, body: string, like: number, dislike: number){
        this.id = Math.random();
        this.questionId = question.id;
        this.authorId = author.id;
        this.answerBody = body;
        this.likeCount = like;
        this.dislikeCount = dislike;
    }
}

export default Answer;