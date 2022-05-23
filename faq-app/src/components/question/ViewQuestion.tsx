import React from 'react'
import { Link } from 'react-router-dom';
import "./question.css";

const ViewQuestion: React.FC<{answer: number, title: string, user: string, creaDate: Date}> = (props) => {
  return (
    <div className="question-container">
      <div className="q-info-wrapper">
        <span>{props.answer}</span>
        <span>answer</span>
      </div>
      <div className="q-main-wrapper">
        <div className="text-section">
          <Link to="/quest/2">{props.title}</Link>
        </div>
        <div className="crt-inf-section">
            <span>{props.user}</span>
            <span>{props.creaDate.toDateString()}</span>
        </div>
      </div>
    </div>
  )
}

export default ViewQuestion