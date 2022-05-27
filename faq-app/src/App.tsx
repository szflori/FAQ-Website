import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import List from "./pages/List/List";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/Signup/SignupPage";
import AnswerContextProvider from "./store/answer-context";
import AuthContextProvider from "./store/auth-contex";
import QuestionContextProvider from "./store/question-context";

function App() {
  return (
    <>
      <AuthContextProvider>
        <QuestionContextProvider>
          <AnswerContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/quest/:id" element={<List />} />
              </Routes>
            </BrowserRouter>
          </AnswerContextProvider>
        </QuestionContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
