import axios from 'axios';
import React from 'react';
import OneUser from './OneUser/OneUser';
import style from './Users.module.css'


class Users extends React.Component {

    constructor(props) {
        super(props);

            axios.get('https://social-network.samuraijs.com/api/1.0//users').then(responce => {
                this.props.setUsers(responce.data.items);
            })  
    }

    render() {
        return (
            <div>
                <div className={style.blokPosition}>
                    {/* <button onClick={this.getUsers}>Получить Пользователей</button> */}
                </div>
                { this.props.users.map(u => <OneUser
                    key={u.id}
                    id={u.id}
                    photos={u.photos}
                    name={u.name}
                    uniqueUrlName={u.uniqueUrlName}
                    followed={u.followed}
                    status={u.status}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />)}
            </div>
        )
    }
}

export default Users;
