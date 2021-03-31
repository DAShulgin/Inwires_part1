import { setUsers, follow, unfollow, setCurrentPage, setTotalUserCount, toggleFollowingProgress  } from '../../Redux/users-reducer';
import { toggleIsFetching } from '../../Redux/toggle-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Users from "./Users";
import { UsersAPI } from '../../API/api';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUserCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        UsersAPI.getUsers(pageNumber,this.props.pageSize ).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
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
                followingInProgress = {this.props.followingInProgress}
                toggleFollowingProgress = {this.props.toggleFollowingProgress}

            />
        </>
    }
}


 const mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.toggle.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};


export default connect(mapStateToProps, {setUsers, follow, unfollow, setCurrentPage, setTotalUserCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);
