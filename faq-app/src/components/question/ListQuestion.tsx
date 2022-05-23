import React, {useContext} from 'react'
import ViewQuestion from './ViewQuestion';
import { QuestionContext } from '../../store/question-context';

const ListQuestion: React.FC = (props) => {
  const questionCtx = useContext(QuestionContext);
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
  return (
    <div className="main-wrapper">
        {questionCtx.items.map((item) => (
            <ViewQuestion answer={2} title={item.questionTitle} user="test" creaDate={today}/>
        ))}
    </div>
  )
}

export default ListQuestion