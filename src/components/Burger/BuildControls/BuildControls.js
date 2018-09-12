import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {
        label: 'Salad',
        type: 'salad'
    },
    {
        label: 'Bacon',
        type: 'bacon'
    },
    {
        label: 'Cheese',
        type: 'cheese'
    },
    {
        label: 'Meat',
        type: 'meat'
    },
]

const buildControls = (props) => {
    return (

        <div className={classes.BuildControls}>
            {controls.map((el, index) => {
                return (<BuildControl key={el.label} label={el.label} />)
            })}
        </div>
    )
}

export default buildControls