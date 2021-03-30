const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    isFetching: true
};

const toggleReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_IS_FETCHING: 
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default toggleReducer;