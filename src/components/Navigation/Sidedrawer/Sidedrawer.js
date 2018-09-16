import React from 'react'
import Logo from '../../Logo/Logo'
import Navigationitems from '../NavigationItems/NavigationItems'
import classes from './Sidedrawer.css'

const sidebar = (props) => {
    // do something here
    return (
        <div className={classes.Sidedrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav>
                <Navigationitems />
            </nav>

        </div>
    )
}

export default sidebar