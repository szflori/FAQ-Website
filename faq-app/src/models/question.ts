import User from "./user";

class Question{
    id: number;
    questionTitle: string;
    questionBody: string;

    constructor(title: string, body: string){
        this.id = Math.random();
        this.questionTitle = title;
        this.questionBody = body;
    }

}

export default Question;