import { connect } from 'react-redux';
import  {LogIN} from '../.././Redux/authorization-reducer';
import Login from './Login';


let mapStateToProps = (state) => {

    return {     
        isAuth: state.auth.isAuth
    }
};


export default connect(mapStateToProps, {LogIN } )(Login);