import React, { Component } from 'react';
import Aux from '../../hoc/aux1';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';
import { connect } from 'react-redux'
export class Layout extends Component {
    state = {
        showSideDrawer: false
    };
    sidedrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    };
    sidedrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };
    render() {
        return (<Aux>
            <Toolbar isAuth={this.props.isAuthenticated} drawertoggleclicked={this.sidedrawerToggleHandler} />
            <Sidedrawer isAuth={this.props.isAuthenticated} open={this.state.showSideDrawer} closed={this.sidedrawerClosedHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>);
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.token
    }
}

export default connect(mapStateToProps,null)(Layout)