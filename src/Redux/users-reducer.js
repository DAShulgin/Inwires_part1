const GET_USERS_LIST = 'GET-USERS-LIST';
const FOLLOW = 'SET-FOLLOW';
const UNFOLOW = 'SET-UNFOLLOW';



let initialState = { 
    users: [] 
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_USERS_LIST:
        return {...state, users:[...state.users, ...action.users] }

        case FOLLOW:
        return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false }
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({ type: GET_USERS_LIST, users });
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLOW, userId });

export default userReducer;