import React from 'react'
import Meals from './Meals.js'

const Data = (props) => {

    return (
        <div className="meal-list">
            <h1>Meals</h1>
            {props.data.map((point, index) => (
                <Meals key={index} name={point.name} course={point.course}/>
            ))}
        </div>
    )
}

export default Data;