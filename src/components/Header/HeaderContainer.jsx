import React from 'react';
import { connect } from 'react-redux';
import {Authorization, LogOUT } from '../../Redux/authorization-reducer';
import Header from './Header';


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.Authorization();
    }

    render() {
        return <>
            <Header  
            login = {this.props.login}
            isAuth = {this.props.isAuth}
            LogOUT = {this.props.LogOUT}
            />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
};


export default connect(mapStateToProps, {Authorization, LogOUT})(HeaderContainer);