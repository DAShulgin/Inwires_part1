import React from 'react';
import OneUser from './OneUser/OneUser';
import style from './Users.module.css'


let Users = (props) => {

    
        let pageCount = Math.ceil(props.totalUserCount / props.pageSize); //определяем сколько всего страниц

        let pages = [];
        for(let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }


        return ( <div>
                <div className={style.blokPosition}>
                     
                   {  pages.map(p => { return  <span className = {props.currentPage === p && style.selectedPage} onClick = {()=> {props.onPageChanged(p)}} >{p}</span>} ) }
                  
                </div>
                { props.users.map(u => <OneUser
                    key={u.id}
                    id={u.id}
                    photos={u.photos}
                    name={u.name}
                    uniqueUrlName={u.uniqueUrlName}
                    followed={u.followed}
                    status={u.status}
                    follow={props.follow}
                    unfollow={props.unfollow}
                />)}
            </div>
        )
    }


export default Users;
