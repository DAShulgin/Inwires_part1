import React from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus} from '../../Redux/profile-reducer';
import { Redirect, withRouter } from 'react-router';
import { WithRedirectComponent } from '../common/HOC/WithRedirectComponent';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        
        if (!userId) {
            userId = this.props.AthorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        
        this.props.getProfile(userId);
        this.props.getStatus(userId);      
    }
    render() {
        return <>
            <Profile 
            profile = {this.props.profile} 
            status = {this.props.status} 
            updateStatus = {this.props.updateStatus}/>
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        AthorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus}),
    withRouter,
 //   WithRedirectComponent
)(ProfileContainer);