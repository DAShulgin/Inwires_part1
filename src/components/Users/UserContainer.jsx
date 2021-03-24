import {setUsers, follow, unfollow} from '../../Redux/users-reducer';
import Users from './Users';
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}


const UsersContainer = connect(mapStateToProps, {setUsers, follow, unfollow })(Users);

export default UsersContainer;