import React, { Component } from 'react'
import Aux from '../../hoc/aux1'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false
    }
    sidedrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        })
    }
    sidedrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar drawertoggleclicked={this.sidedrawerToggleHandler} />
                <Sidedrawer open={this.state.showSideDrawer} closed={this.sidedrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout