import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1 id="header">{ props.course }</h1>
}

const Content = (props) => {
    return (
        <div>
            { 
                props.content.parts.map((part, id) => {
                    return (
                        <p className="part exercise" key={id}>
                            { part } 
                            : &nbsp;
                            { props.content.exercises[id] }
                        </p>
                    )   
                })
            }
        </div>
    )
}

const Total = (props) => {
    return <p id="total"> Number of Exercise: { props.total.reduce((sum, exercise) => sum + exercise) }</p>
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const content = {
      parts: [part1, part2, part3], 
      exercises: [exercises1, exercises2, exercises3] 
    }
    const total = [exercises1, exercises2, exercises3] 
  return (
    <div>
      <Header course={course} />
      <Content content={content}/>
      <Total total= {total} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))