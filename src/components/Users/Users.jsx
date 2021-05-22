import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import Preloader from '../common/Preloader/Preloader';
import OneUser from './OneUser/OneUser';


let Users = (props) => {

        return ( <div>
              { props.isFetching ? <Preloader /> : null }    
                <Paginator 
                totaItemsCount = {props.totaItemsCount}               
                pageSize = {props.pageSize} 
                currentPage = {props.currentPage} 
                onPageChanged = {props.onPageChanged}
                portionSize={props.portionSize}
                /> 
            
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
                    followingInProgress = {props.followingInProgress}
                    toggleFollowingProgress  = {props.toggleFollowingProgress}
                />)}
            </div>
        )
    }


export default Users;
