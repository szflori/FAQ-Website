import Question from "./question";
import User from "./user";

class Answer{
    id: number;
    answerBody: string;

    constructor( body: string){
        this.id = Math.random();
        this.answerBody = body;

    }
}

export default Answer;