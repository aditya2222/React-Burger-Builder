import React, { Component } from 'react'
import Aux from '../../hoc/aux1'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {

    state = {
        showSideDrawer: true
    }
    sidedrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar />
                <Sidedrawer open={this.state.showSideDrawer} closed={this.sidedrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout