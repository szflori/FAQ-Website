# FAQ-Website
This website project: *frequently asked question*. **frequently asked questions** —used to refer to a list of answers to typical questions that users of a Web site might ask.

## How to start
1. Clone git repository with `git clone` command
2. Open faq-web-app  `cd faq-web-app`
3. Start in terminal `npm start`
4. Open browser then enter `https://localhost:3000`

## How to work
- Only registered users can ask and answer
- Not registered users just can view it
- Registered users can modify and delete items
- Registered users can like or dislike the answers

## Testing Data
| Username | email | password |
| ----- | ----- | ------ |
| Test Elek | elek@test.com | test |
| John Dee | john@dee.com | dee |
| Mary Lee | mary@lee.com | lee |


## How to use Data model
> User
```
{
  id: string;
  username: string;
  email: string;
  password: string;
}
```
> Question
```
{
  id: string;
  userID: string;
  tag: string[];
  title: string;
  description: string;
}
```
> Answer
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
> Category
```
{
  id: string;
  title: string;
}
```
## Project used dependencies

| Dependencies name | version |
| ----- | ----- |
| typescript | ^4.7.2 | 
| react-router-dom | ^6.3.0 |
| mui/material | ^5.8.2 |
| mui/icons-material | ^5.8.2 |
| emotion/styled | ^11.8.1 | 
| emotion/react | ^11.9.0 |

## Postscript
I hope you liked it 👍 and get a star ⭐
