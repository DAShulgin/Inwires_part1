import React from 'react';
import AvatarBlok from './AvatarBlock/AvatarBlok';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={style.grid2} >

            <div className={style.blok1}>
                <AvatarBlok />
            </div>
            <div className={style.blok2}>
                <ProfileInfo />
            </div>
            <div className={style.blok3}>
                <MyPosts
                profilePage = {props.State.profilePage}                 
                AddPost = {props.AddPost} 
                updateNewPostText  = {props.updateNewPostText}  />
            </div>

        </div>
    )
}

export default Profile;