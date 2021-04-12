import { addMessageAC} from '../../Redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithRedirectComponent } from '../common/HOC/WithRedirectComponent';
import { compose } from 'redux';


let mapStateToProps = (state) => {

    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
    }
}

let mapStateDispatchToProps = (dispatch) => {

    return {
        NewMessage: (text) => { dispatch(addMessageAC(text)); },
     
    }
}

export default compose(
    connect(mapStateToProps, mapStateDispatchToProps),
    WithRedirectComponent,
)(Dialogs);