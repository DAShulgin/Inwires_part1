import React from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router';
import { WithRedirectComponent } from '../common/HOC/WithRedirectComponent';


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1620;
        }
        this.props.getProfile(userId);
    }

    render() {
        return <>
            <Profile profile={this.props.profile}/>
        </>
    }
}



let mapStateToProps = (state) => {

    return {
        profile: state.profilePage.profile,
    }
};


let WithUrlDataContainerComponent = withRouter(WithRedirectComponent(ProfileContainer));


export default connect(mapStateToProps, { getProfile })(WithUrlDataContainerComponent);