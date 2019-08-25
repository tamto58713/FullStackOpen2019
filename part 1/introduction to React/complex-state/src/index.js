import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Good = (props) => {
    return (
        <tr>
            <td>Good</td>
            <td>{ props.good }</td>
        </tr>
    )
}

const Neutral = (props) => {
    return (
        <tr>
            <td>Neutral</td>
            <td>{ props.neutral }</td>
        </tr>
    )
}

const Bad = (props) => {
    return (
        <tr>
            <td>Bad</td>
            <td>{ props.bad }</td>
        </tr>
    )
}

const All = (props) => {
    return (
        <tr id="all">
            <td>All</td>
            <td>{ props.all }</td>
        </tr>
    )
}

const Average = (props) => {
    return (
        <tr>
            <td id="average">
                Average
            </td>
            <td>
                { props.average }
            </td>
        </tr>
    )
}

const Positive = (props) => {
    return (
        <tr>
            <td id="positive">
                Positive
            </td>
            <td>
                { props.positive }%
            </td>
    </tr>
    )
}
const App = (props) => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const all = good + neutral + bad;
    const average = (good - bad) / all || 0;
    const positive = good / all * 100 || 0;
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
            <div id="buttons-feedback" className="btn-group">
                <button className="btn btn-primary" onClick={onClickFeedbackGood} >Good</button>
                <button className="btn btn-primary" onClick={onClickFeedbackNeutral}>Neutral</button>
                <button className="btn btn-primary"  onClick={onClickFeedbackBad}>Bad</button>
            </div>

            <h3>Statisfics</h3>
            {good === 0 && neutral === 0 && bad === 0 ? <h6>No feedback given</h6>:
                                                                                    <table className="table" id="status">
                                                                                        <thead></thead>
                                                                                        <tbody>
                                                                                        <Good good={good}/>
                                                                                        <Neutral neutral={neutral}/>
                                                                                        <Bad bad={bad} />
                                                                                        <All all={all} />
                                                                                        <Average average={average} />
                                                                                        <Positive positive={positive} />
                                                                                        </tbody>
                                                                                    </table >}
                                                            

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
