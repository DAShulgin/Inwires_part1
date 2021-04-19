import { getAuthUserData  } from './authorization-reducer';

const INITAILIZED_SUCCESS = 'SINITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};


const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITAILIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }

}

export const InitializedSuccess = () => ({ type: INITAILIZED_SUCCESS });


export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        //dispatch(somethinelse());
        // dispatch(somethinelse());

        Promise.all([promise]) //Пока все промисы зарезолвятся,сделай что-то
            .then(() => {
                dispatch(InitializedSuccess());
            });
    }
}

export default appReducer;