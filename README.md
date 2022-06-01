# FAQ-Website
This website project: frequently asked question, frequently asked questions —used to refer to a list of answers to typical questions that users of a Web site might ask.

## How to start
1. Clone git repository with `git clone` command
2. Open faq-web-app  `cd faq-web-app`
3. Start in terminal `npm start`
4. Open browser then enter `https://localhost:3030`

## How to work
1. Only registered users can ask and answer
2. Not registered users just can view it
3. Registered users can modify and delete items
4. Registered users can like or dislike the answers

## How to use Data model
1. User
```
{
  id: string;
  username: string;
  email: string;
  password: string;
}
```
2. Question
```
{
  id: string;
  userID: string;
  title: string;
  description: string;
}
```
3. Answer
```
{
  id: string;
  userID: string;
  text: string;
  questionID: string;
  likeCount: number;
  dislikeCount: number;
}
```
