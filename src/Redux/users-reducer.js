import { UsersAPI } from "../API/api";
import { updateObjectArray } from "../utils/obj-helpers";

const GET_USERS_LIST = 'Inwires/Users/GET-USERS-LIST';
const FOLLOW = 'SET-FOLLOW';
const UNFOLOW = 'SET-UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS ';

let initialState = {
    users: [],
    pageSize: 10,  // кол-во юзеров на одной странице 
    totalUserCount: 0, // cколько всего пользователей
    currentPage: 1,  //текущая страница
    isFetching: true,
    followingInProgress: [],
    portionSize: 10 // размер порции для пагинатора
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_USERS_LIST:
            return { ...state, users: action.users }

        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: true} )       
            }
        case UNFOLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: false} )                  
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress:
                    action.isFetching
                        ? [...state.followingInProgress, action.userId]
                        : [state.followingInProgress.filter(id => id !== action.userId)]
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
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setTotalUserCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });


export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let responce = await UsersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(responce.items));
    dispatch(setTotalUserCount(responce.totalCount));
};


const followANDunfollowFlow = async (dispatch, userId, apiMethode, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let responce = await apiMethode(userId);
    if (responce.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    followANDunfollowFlow(dispatch, userId, UsersAPI.Follow.bind(UsersAPI), FollowSuccess);
};

export const unfollow = (userId) => async (dispatch) => {
    followANDunfollowFlow(dispatch, userId, UsersAPI.Unfollow.bind(UsersAPI), UnfollowSuccess);
};

export default userReducer;