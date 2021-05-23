import { connect } from 'react-redux';
import  {LogIN} from '../.././Redux/authorization-reducer';
import Login from './Login';


let mapStateToProps = (state) => {

    return {     
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
};


export default connect(mapStateToProps, {LogIN } )(Login);