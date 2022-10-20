import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAnswerComponent from "./components/Answer/CreateAnswerComponent";
import CreateQuetionComponent from "./components/Question/CreateQuetionComponent";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import ViewItem from "./pages/ViewItem/ViewItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<CreateQuetionComponent />} />
        <Route path="/item_list/:id" element={<ViewItem />} />
        <Route path="/item_answer/:id" element={<CreateAnswerComponent />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
