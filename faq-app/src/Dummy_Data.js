import Question from "./models/question";
import User from "./models/user";

export const users = [
  new User("test", "test@test.hu", "male"),
  new User("TElek", "test@elek.com", "female"),
];

export const questions = [
    new Question(users[0], "How?", "Lorem ipsum"),
    new Question(users[0], "What?", "Lorem ipsum"),
    new Question(users[0], "Where?", "Lorem ipsum"),
    new Question(users[1], "When?", "Lorem ipsum"),
    new Question(users[1], "Are?", "Lorem ipsum"),
];
