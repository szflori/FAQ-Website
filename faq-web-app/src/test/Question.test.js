import { render, screen } from "@testing-library/react";
import ViewQuestionComponent from "../components/Question/ViewQuestionComponent";

test("renders Question component", () => {
  render(
    <ViewQuestionComponent
      id={"t1"}
      title={"This is a Test?"}
      description={"Please help me, how to testing!?"}
      userID={"ut1"}
    />
  );

  const titleElement = screen.getByText("This is a Test?");
  expect(titleElement).toBeInTheDocument();
});
