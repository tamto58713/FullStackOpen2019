import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
const App = (props) => {
    const [checked, setChecked] = useState(0)
    const listAnecdotes = [
        {
            id: 1,
            content: "Adding manpower to a late software project makes it later!",
            author: "Brooks Law"
        },
        {
            id: 2,
            content: "The best way to get a project done faster is to start sooner.",
            author: "Jim Highsmith"
        },
        {
            id: 3,
            content: "The first 90 percent of the code accounts for the first 90 percent of the development time...\n The remaining 10 percent of the code accounts for the other 90 percent of the development time. ",
            author: "Tom Cargill"
        },
        {
            id: 4,
            content: "Even the best planning is not so omniscient as to get it right the first time.",
            author: "Fred Brooks"
        },
        {
            id: 5,
            content: "How does a project get to be a year late?... One day at a time. ",
            author: "Fred Brooks"
        },
        {
            id: 6,
            content: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
            author: "Martin Fowler"
        },
        {
            id: 7,
            content: "Program testing can be used to show the presence of bugs, but never to show their absence! ",
            author: "Edsger Dijkstra"
        },
        {
            id: 8,
            content: "A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want. ",
            author: "Niklaus Wirth"
        },
        {
            id: 9,
            content: "Design and programming are human activities; forget that and all is lost.",
            author: "Bjarne Stroustrup"
        },
        {
            id: 10,
            content: "Before software can be reusable it first has to be usable.",
            author: "Ralph Johnson "
        },
    ]
    let temp = {};
    listAnecdotes.map(anecdote => {
        return temp[anecdote.id] = 0;
    })
    const [votes, setVotes] = useState(temp);

    const getAnecdoteMostVote = () => {
        let max = 0; let pos = 0;
        for (let i = 0; i < listAnecdotes.length; i++) {
            if (votes[listAnecdotes[i].id] > max) {
                pos = i;
                max = votes[listAnecdotes[i].id];
            }
        }
        return listAnecdotes[pos];
    }

    const onVoteAnecdote = (props) => {
        setVotes({
            ...votes,
            [listAnecdotes[checked].id]: votes[listAnecdotes[checked].id] + 1
        })
    }
    const onNextAnecdote = (props) => {
        if (checked === listAnecdotes.length - 1) {
            setChecked(0);
        }
        else
            setChecked(checked + 1)
    }
    return (
        <div>
            <div className="anecdote-of-day">
                <h3>Anecdotes of the day</h3>
                <span className="id">[{ listAnecdotes[checked].id }]</span>
                <div className="container-anecdote">
                    <div className="anecdote">
                        <div className="content">{ listAnecdotes[checked].content }</div>
                        <span className="author">-- { listAnecdotes[checked].author }</span>
                    </div>
                </div>
                <div className="amout-votes">
                    <code>
                        Votes: { votes[listAnecdotes[checked].id] }
                    </code>   
                </div>
                <button className="btn btn-primary mr-1" onClick={onVoteAnecdote}>Vote</button>
                <button className="btn btn-primary" onClick={onNextAnecdote}>Next</button>
            </div>
            <div className="anecdote-most-votes">
                <h3>Anecdotes with most votes</h3>

                <span className="id">[{ getAnecdoteMostVote().id }]</span>
                <div className="container-anecdote">
                    <div className="anecdote">
                        <div className="content">{ getAnecdoteMostVote().content }</div>
                        <span className="author">-- { getAnecdoteMostVote().author }</span>
                    </div>
                </div>
                <div className="amout-votes">
                    <code>
                        Votes: { votes[getAnecdoteMostVote().id] }
                    </code>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
