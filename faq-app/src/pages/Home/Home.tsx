import React, { useState } from "react";
import Navbar from "../../components/nav/Navbar";
import CreateQuestion from "../../components/question/CreateQuestion";
import ListQuestion from "../../components/question/ListQuestion";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Card/Card";
import "./home.css";

const Home: React.FC = () => {
  const [askNew, setAskNew] = useState<boolean>();

  return (
    <>
      <Navbar />
      <div className="home-index">
        <Card size="">
          <div className="header-wrapper">
            <h2>All Questions</h2>
            <Button type="outlined" onAction={() => setAskNew(!askNew)}>
              Ask Question
            </Button>
          </div>
          {askNew && <CreateQuestion/>}
          <ListQuestion />
        </Card>
      </div>
    </>
  );
};

export default Home;
