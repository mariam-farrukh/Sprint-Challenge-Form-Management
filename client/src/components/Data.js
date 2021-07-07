import React from 'react'
import Meals from './Meals.js'

const Data = (props) => {

    return (
        <div className="meal-list">
            <h1>Meals</h1>
            {props.data.map((info, index) => (
                <Meals key={index} name={info.name} course={info.course}/>
            ))}
        </div>
    )
}

export default Data;