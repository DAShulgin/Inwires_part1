import React from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { SetUserProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router';
import { ProfileAPI } from '../../API/api';




class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1620;
        }
        ProfileAPI.getProfile(userId).then(data => {
            this.props.SetUserProfile(data);
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