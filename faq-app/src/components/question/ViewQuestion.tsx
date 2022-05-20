import React from 'react'

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
          <h4>{props.title}</h4>
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