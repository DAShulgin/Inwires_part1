import React from 'react';
import OneUser from './OneUser/OneUser';
import style from './Users.module.css'

const urlImg = 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png';
const urlImg2 = 'https://sibsvaya-nk.ru/wp-content/uploads/2018/08/baba.png';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
            { id: 1, Avatar: urlImg, Name: 'Антон', followed: true, Status: 'Lorem ipsum dolor sit', location: { country: 'РФ', city: 'Москва' } },
            { id: 2, Avatar: urlImg, Name: 'Дмитрий', followed: false, Status: 'Lorem ipsum dolor sit', location: { country: 'РФ', city: 'Москва' } },
            { id: 3, Avatar: urlImg2, Name: 'Анжела', followed: true, Status: 'Lorem ipsum dolor sit', location: { country: 'РФ', city: 'Москва' } },
            { id: 4, Avatar: urlImg2, Name: 'Света', followed: false, Status: 'Lorem ipsum dolor sit', location: { country: 'РФ', city: 'Москва' } },
            { id: 5, Avatar: urlImg, Name: 'Виктор', followed: false, Status: 'Lorem ipsum dolor sit', location: { country: 'РФ', city: 'Москва' } },
            { id: 6, Avatar: urlImg, Name: 'Mr.X', followed: false, Status: 'Я всё еще знаю, что вы сделали прошлым летом', location: { country: 'РФ', city: 'Москва' } }
        ]
        )};

    let UsersItems = props.users.map(u => <OneUser key={u.id}
        id={u.id}
        Avatar={u.Avatar}
        Name={u.Name}
        followed={u.followed}
        Status={u.Status}
        location={u.location}
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