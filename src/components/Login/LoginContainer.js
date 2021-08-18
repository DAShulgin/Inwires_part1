import React from 'react';
import { connect } from 'react-redux';
import { LogIN, getProfile } from '../.././Redux/authorization-reducer';
import Login from './Login';

class LoginContainer extends React.Component {


    render() {
        return <>  
            <Login 
            isAuth = {this.props.isAuth}
            captchaUrl = {this.captchaUrl}
            LogIN = {this.props.LogIN}
            getProfile = {this.props.getProfile}
            userId = {this.props.AthorizedUserId}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
        AthorizedUserId: state.auth.userId,
    }
};


export default connect(mapStateToProps, { LogIN, getProfile })(LoginContainer);