import { UsersAPI } from "../API/api";
import { toggleIsFetching } from '../Redux/toggle-reducer';


const GET_USERS_LIST = 'GET-USERS-LIST';
const FOLLOW = 'SET-FOLLOW';
const UNFOLOW = 'SET-UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS ';




let initialState = {
    users: [],
    pageSize: 10,  // кол-во юзеров на одной странице 
    totalUserCount: 0, // cколько всего пользователей
    currentPage: 1,  //текущая страница
    followingInProgress: []
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_USERS_LIST:
            return { ...state, users: action.users }

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : [state.followingInProgress.filter(id => id != action.userId)]
            }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_COUNT:
            return { ...state, totalUserCount: action.totalCount }
        default:
            return state;
    }
}

export const setUsers = (users) => ({ type: GET_USERS_LIST, users });
export const FollowSuccess = (userId) => ({ type: FOLLOW, userId });
export const UnfollowSuccess = (userId) => ({ type: UNFOLOW, userId });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUserCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });


export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        });
    };
};


export const unfollow = (id) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        UsersAPI.Unfollow(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(UnfollowSuccess(id));
                dispatch(toggleFollowingProgress(false, id));
            };
        });
    };
};

export const follow = (id) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        UsersAPI.Follow(id).then(data => {
            if (data.resultCode == 0) {
                dispatch(FollowSuccess(id));
                dispatch(toggleFollowingProgress(false, id));
            }
        });
    }
}
export default userReducer;