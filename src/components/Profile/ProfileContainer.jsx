import React from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus, savePhoto} from '../../Redux/profile-reducer';
import {  withRouter } from 'react-router';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;
        
        if (!userId)  {
            userId = this.props.AthorizedUserId;
        if (!userId) 
            this.props.history.push('/login');             
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);  
    }

    componentDidMount() {  
        this.refreshProfile();     
    }

     componentDidUpdate(prevProps){
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile(); 
        }
    } 


    render() {
        return <>
            <Profile 
            isOwner = {!this.props.match.params.userId}
            profile = {this.props.profile} 
            status = {this.props.status} 
            updateStatus = {this.props.updateStatus}
            savePhoto = {this.props.savePhoto}/>
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        AthorizedUserId: state.auth.userId,
    }
};

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
)(ProfileContainer);