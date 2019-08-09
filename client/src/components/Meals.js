import React from 'react';

const Meal = (props) => {
    return(
        <div>
            <p>{props.name}: {props.course}</p>
        </div>
    )
}

export default Meal;