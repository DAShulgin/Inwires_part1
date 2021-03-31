import { AuthorizationAPI } from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    auth: false,
    email: null,
    login: null,
    isAuth: false
};


const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth: true
            };

        default:
            return state;
    }

}

export const SetAuthUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } });

export const Authorization = () => {
    
return (dispatch) => {
         AuthorizationAPI.getAuth().then(data => {
            if (data.resultCode == 0) {
                let { id, login, email } = data.data;
  
                dispatch(SetAuthUserData(id, login, email));
            }
        })
    }
}
export default authReducer;