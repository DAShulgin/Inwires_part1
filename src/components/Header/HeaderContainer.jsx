import React from 'react';
import { connect } from 'react-redux';
import { AuthorizationAPI } from '../../API/api';
import {SetAuthUserData} from '../../Redux/authorization-reducer';
import Header from './Header';





class HeaderContainer extends React.Component {

    componentDidMount() {
        AuthorizationAPI.getAuth().then(data => {
            if(data.resultCode == 0 ){
            let {id, login, email} = data.data;
            this.props.SetAuthUserData(id, login, email);
            }
        });
      
    }

    render() {
        return <>
            <Header  
            login = {this.props.login}
            isAuth = {this.props.isAuth}
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


export default connect(mapStateToProps, {SetAuthUserData })(HeaderContainer);