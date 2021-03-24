import {setUsers, follow, unfollow} from '../../Redux/users-reducer';
import UsersC from './UsersС';
import {connect} from 'react-redux';



let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
    }
}


const UsersContainer = connect(mapStateToProps, {setUsers, follow, unfollow })(UsersC);

export default UsersContainer;