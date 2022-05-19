import React from 'react'
import Question from '../components/question/Question'

const Home: React.FC = () => {
    const timeElapsed = Date.now();
const today = new Date(timeElapsed);
  return (
    <div>
        <div className="header-wrapper">
            <h3>All Questions</h3>
            <button>Ask Question</button>
        </div>
        <div className="main-wrapper">
            <Question answer={2} title="What is Lorem ipsu" user='Test' creaDate={today}/>
        </div>
    </div>
  )
}

export default Home