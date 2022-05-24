import User from "./user";

class Question{
    id: number;
    user: User; 
    questionTitle: string;
    questionBody: string;

    constructor(user: User, title: string, body: string){
        this.id = Math.random();
        this.user = user;
        this.questionTitle = title;
        this.questionBody = body;
    }

}

export default Question;