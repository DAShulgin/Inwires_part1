import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {SetAuthUserData} from '../../Redux/authorization-reducer';
import Header from './Header';





class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me` , {
            withCredentials: true
        }).then(responce => {
            if(responce.data.resultCode == 0 ){
            let {id, login, email} = responce.data.data;
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