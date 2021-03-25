import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Profile from "./Profile";
import {SetUserProfile} from '../../Redux/profile-reducer';




class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/1620').then(responce => {  
        this.props.SetUserProfile(responce.data);
        });
    }

    render() {
        return <>
            <Profile  profile = {this.props.profile} />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
    }
};

export default connect(mapStateToProps, {SetUserProfile})(ProfileContainer);