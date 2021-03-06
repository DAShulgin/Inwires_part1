import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f0dba38f-8189-437a-b39d-e6e384de2e19'
    }
});


export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data);
    },
    Unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(responce => responce.data);
    },
    Follow(id) {
        return instance.post(`follow/${id}`)
            .then(responce => responce.data);
    },
};

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
            .then(responce => responce.data);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
            .then(responce => responce.data);
    },
    updateStatus(status) {
        return instance.put('profile/status/', { status: status })
            .then(responce => responce.data);
    },
    savePhoto(PhotoFile) {
        const formData = new FormData();
        formData.append('image', PhotoFile)
        return instance.put('profile/photo', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then(responce => responce.data);
    },
    saveProfile(profile) {
        return instance.put('profile', profile).then(responce => responce.data);
    }
}

export const AuthorizationAPI = {
    getAuth() {
        return instance.get('auth/me').then(responce => responce.data);
    },
    authIN(email, password, rememberMe = false, captcha = null)  {
        return instance.post('/auth/login', { email, password, rememberMe, captcha }).then(responce => responce.data);
    },
    authOUT() {
        return instance.delete('/auth/login').then(responce => responce.data);
    },
};

export const SecurityAPI = {
    getCaptchaUrl(){
        return instance.get('/security/get-captcha-url').then(responce => responce.data);
    }
}

