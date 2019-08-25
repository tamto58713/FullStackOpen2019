import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1 id="header">{ props.course }</h1>
}

const Content = (props) => {
    return (
        <div>
            { 
                props.parts.map((part, id) => {
                    return (
                        <p className="part exercise" key={id}>
                            { part.name } 
                            : &nbsp;
                            { part.exercise }
                        </p>
                    )   
                })
            }
        </div>
    )
}

const Total = (props) => {
    return <p id="total"> Number of Exercise: { props.parts.reduce((sum, part) => { 
        return sum + part.exercise
    }, 0) }</p>
}

const App = () => {
    
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercise: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercise: 7
    }
    const part3 = {
        name: 'State of a component',
        exercise: 14
    }
    const parts = [part1, part2, part3]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))