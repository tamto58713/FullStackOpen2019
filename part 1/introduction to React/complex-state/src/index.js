import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Good = (props) => {
    return (
        <div>
            Good: { props.good }
        </div>
    )
}

const Neutral = (props) => {
    return (
        <div>
            Neutral: { props.neutral }
        </div>
    )
}

const Bad = (props) => {
    return (
        <div>
            Good: { props.bad }
        </div>
    )
}


const App = (props) => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onClickFeedbackGood = () => {
        setGood(good + 1);
    }
    const onClickFeedbackNeutral = () => {
        setNeutral(neutral + 1);
    }
    
    const onClickFeedbackBad = () => {
        setBad(bad + 1);
    }
    return (
        <div>
            <h3>Give a feedback</h3>
            <div id="buttons-feedback" class="btn-group">
                <button className="btn btn-primary" onClick={onClickFeedbackGood} >Good</button>
                <button className="btn btn-primary" onClick={onClickFeedbackNeutral}>Neutral</button>
                <button className="btn btn-primary"  onClick={onClickFeedbackBad}>Bad</button>
            </div>
            <h4>Statisfics</h4>
            <div id="status">
                <Good good={good}/>
                <Neutral neutral={neutral}/>
                <Bad bad={bad} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
