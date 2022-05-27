import React from "react";
import ItemQuestion from "../../components/question/ItemQuestion";
import { useParams } from "react-router-dom";
import Card from "../../components/UI/Card/Card";
import Navbar from "../../components/nav/Navbar";

const ListAnswer: React.FC = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  const { id } = useParams();
  const numID = parseFloat(id!);

  // TO DO SEARCH QUEST ID

  return (
    <>
      <Navbar />
      <Card>
        <ItemQuestion id={numID} date={today} />
      </Card>
    </>
  );
};

export default ListAnswer;
