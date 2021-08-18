import React from 'react';
import { connect } from 'react-redux';
import { LogOUT, getProfile } from '../../Redux/authorization-reducer';
import Header from './Header';


class HeaderContainer extends React.Component {
 
    componentDidMount(){   
        if(this.props.isAuth == true)
        this.props.getProfile(this.props.AthorizedUserId);
    }
 

    render() {
        return <>
            <Header
                login={this.props.login}
                isAuth={this.props.isAuth}
                LogOUT={this.props.LogOUT}
                profile={this.props.profile}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        AthorizedUserId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        profile: state.auth.profile,
    }
};


export default connect(mapStateToProps, { LogOUT, getProfile })(HeaderContainer);