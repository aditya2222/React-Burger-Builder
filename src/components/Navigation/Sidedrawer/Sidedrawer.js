import React from 'react'
import Logo from '../../Logo/Logo'
import Navigationitems from '../NavigationItems/NavigationItems'
import classes from './Sidedrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/aux1'

const sidebar = (props) => {
    let attachedClasses = [classes.Sidedrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>

                <nav>
                    <Navigationitems />
                </nav>

            </div>
        </Aux>
    )
}

export default sidebar