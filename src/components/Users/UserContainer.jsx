import {setUsers, follow, unfollow, setCurrentPage, setTotalUserCount} from '../../Redux/users-reducer';
import Users from './Users';
import {connect} from 'react-redux';



let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}


const UsersContainer = connect(mapStateToProps, {setUsers, follow, unfollow, setCurrentPage, setTotalUserCount })(Users);

export default UsersContainer;