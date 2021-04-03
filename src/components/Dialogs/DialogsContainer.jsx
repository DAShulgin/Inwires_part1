import { addMessageAC, updateNewMessageTextAC } from '../../Redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { WithRedirectComponent } from '../common/HOC/WithRedirectComponent';
import { compose } from 'redux';


let mapStateToProps = (state) => {

    return {
        dialogs: state.dialogPage.dialogs,
        messages: state.dialogPage.messages,
        NewMessageText: state.dialogPage.NewMessageText,
    }
}

let mapStateDispatchToProps = (dispatch) => {

    return {
        NewMessage: () => { dispatch(addMessageAC()); },
        updateMessage: (text) => { dispatch(updateNewMessageTextAC(text)); }
    }
}

export default compose(
    connect(mapStateToProps, mapStateDispatchToProps),
    WithRedirectComponent,
)(Dialogs);