import React from 'react'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igkey, index) => {
        return <li key={igkey}> <span style={{ textTransform: 'capitalize' }}>{igkey}</span>: {props.ingredients[igkey]} </li>
    })
    return (
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
        </div>
    )
}

export default orderSummary