import { setUsers, follow, unfollow, setCurrentPage,  requestUsers } from '../../Redux/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Users from "./Users";
import {getUsers, getPageSize, getTotalUserCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../Redux/users-selectors';


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const pageSize = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            <Users
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state) ,
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};


export default connect(mapStateToProps, { setUsers, follow, unfollow,  setCurrentPage, requestUsers })(UsersContainer);
