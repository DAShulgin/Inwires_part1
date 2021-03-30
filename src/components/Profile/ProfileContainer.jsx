import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Profile from "./Profile";
import { SetUserProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router';




class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1620;
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(responce => {
            this.props.SetUserProfile(responce.data);
        });
    }

    render() {
        return <>
            <Profile profile={this.props.profile} />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
    }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { SetUserProfile})(WithUrlDataContainerComponent);