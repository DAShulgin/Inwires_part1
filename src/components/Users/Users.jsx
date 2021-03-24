import axios from 'axios';
import React from 'react';
import OneUser from './OneUser/OneUser';
import style from './Users.module.css'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);
            this.props.setTotalUserCount(responce.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(responce => {
            this.props.setUsers(responce.data.items);      
    });
}

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize); //определяем сколько всего страниц

        let pages = [];
        for(let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }


        return ( <div>
                <div className={style.blokPosition}>
                     
                   {  pages.map(p => { return  <span className = {this.props.currentPage === p && style.selectedPage} onClick = {()=> {this.onPageChanged(p)}} >{p}</span>} ) }
                  
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
