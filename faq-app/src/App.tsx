import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./pages/Home";
import ListAnswers from "./pages/ListAnswers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/q_answers/:id" element={<ListAnswers/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
