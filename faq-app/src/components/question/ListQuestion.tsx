import React from 'react'
import Question from '../../models/question'
import ViewQuestion from './ViewQuestion'

const ListQuestion: React.FC<{items: Question[]}> = (props) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
  return (
    <div className="main-wrapper">
        {props.items.map((item) => (
            <ViewQuestion answer={2} title={item.questionTitle} user="test" creaDate={today}/>
        ))}
    </div>
  )
}

export default ListQuestion