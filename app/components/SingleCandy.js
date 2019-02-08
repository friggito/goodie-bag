import React from 'react'

const SingleCandy = (props) => {
    return (
    <div key={props.candy.id} class='candy-item'>
        <img url={props.candy.imageUrl}></img>
        <h4>{props.candy.name}</h4>
        <h5>Quantity: {props.candy.quantity}</h5>
        <p>{props.candy.description}</p>
    </div>
    )
}

export default SingleCandy
