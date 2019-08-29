import React from 'react'

const Course = (props) => {
    return (
        <div>
            {
                props.courses.map((course, index) => {
                    return (
                        <div key={index}>
                            <h2>{ course.name }</h2>
                            {
                                course.parts.map((part, index) => {
                                    return (    
                                        <div key={index}>
                                            { part.name }: { part.exercises }
                                        </div>
                                    )                             
                                })
                            }

                            <h6>
                                Total of    &nbsp;
                                { 
                                    course.parts.reduce((sum, exercise) => {
                                        console.log(sum, exercise)
                                        return sum + exercise.exercises
                                    }, 0)
                                }     &nbsp;
                                exercises
                            
                            </h6>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}
export default Course