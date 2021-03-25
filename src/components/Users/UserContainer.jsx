import {setUsers, follow, unfollow, setCurrentPage, setTotalUserCount} from '../../Redux/users-reducer';
import {connect} from 'react-redux';
import React from 'react';
import axios from 'axios';
import Users from "./Users";



class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.setTotalUserCount(responce.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
        });
    }

    render() {
        return <Users 
        pageSize = {this.props.pageSize}
        totalUserCount = {this.props.totalUserCount}
        currentPage ={this.props.currentPage}
        users = {this.props.users}
        onPageChanged = {this.onPageChanged}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow} 
        />
    }
}


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}


export default connect(mapStateToProps, {setUsers, follow, unfollow, setCurrentPage, setTotalUserCount })(UsersContainer);
