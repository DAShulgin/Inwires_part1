const GET_USERS_LIST = 'GET-USERS-LIST';
const FOLLOW = 'SET-FOLLOW';
const UNFOLOW = 'SET-UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';




let initialState = {
    users: [],
    pageSize: 10,  // кол-во юзеров на одной странице 
    totalUserCount: 0, // cколько всего пользователей
    currentPage: 1,  //текущая страница
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
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_COUNT:
            return { ...state, totalUserCount: action.totalCount }    
        default:
            return state;
    }
}

export const setUsers = (users) => ({ type: GET_USERS_LIST, users });
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLOW, userId });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUserCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });


export default userReducer;