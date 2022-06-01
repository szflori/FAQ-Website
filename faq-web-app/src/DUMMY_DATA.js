export const Test_Category = [
  {
    id: "c0",
    title: "ALL",
  },
  {
    id: "c1",
    title: "HTML",
  },
  {
    id: "c2",
    title: "CSS",
  },
  {
    id: "c3",
    title: "JavaScript",
  },
  {
    id: "c4",
    title: "TypeScript",
  },
  {
    id: "c5",
    title: "Java",
  },
  {
    id: "c6",
    title: "C#",
  },
  {
    id: "c7",
    title: "C++",
  },
];

export const Test_User = [
  { id: "u1", username: "Test Elek", email: "elek@test.com", password: "test" },
  { id: "u2", username: "John Dee", email: "john@dee.com", password: "dee" },
  { id: "u3", username: "Mary Lee", email: "mary@lee.com", password: "lee" },
];

export const Test_Question = [
  {
    id: "q1",
    userID: "u1",
    tag: ["c0", "c1", "c2", "c3"],
    title: "How to make Website?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "q2",
    userID: "u2",
    tag: ["c0", "c3", "c4"],
    title: "What is difference JS vs TS?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "q3",
    userID: "u3",
    tag: ["c0", "c5", "c6", "c7"],
    title: "What programm languages good for desktop software?",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const Test_Answer = [
  {
    id: "a1",
    userID: "u1",
    questionID: "q2",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    likeCount: 7,
    dislikeCount: 1,
  },
  {
    id: "a2",
    userID: "u3",
    questionID: "q2",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    likeCount: 17,
    dislikeCount: 3,
  },
  {
    id: "a3",
    userID: "u3",
    questionID: "q1",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    likeCount: 17,
    dislikeCount: 3,
  },
  {
    id: "a4",
    userID: "u2",
    questionID: "q3",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    likeCount: 9,
    dislikeCount: 2,
  },
];
