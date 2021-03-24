import axios from 'axios';
import React from 'react';
import OneUser from './OneUser/OneUser';
import style from './Users.module.css'



const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0//users').then(responce => {
            props.setUsers(responce.data.items);
        })
    }

    let UsersItems = props.users.map(u => <OneUser key={u.id}

        id={u.id}
        photos={u.photos}
        name={u.name}
        uniqueUrlName = {u.uniqueUrlName}
        followed={u.followed}
        status={u.status}
        follow={props.follow}
        unfollow={props.unfollow}
    />);

    return (
        <div>
            <div>
                { /* <button onClick={onGetUsersList}>Получить Пользователей</button> */}
            </div>
            {UsersItems}
        </div>
    )
}

export default Users;