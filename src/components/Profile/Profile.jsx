import React from 'react';
import AvatarBlok from './AvatarBlock/AvatarBlok';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';

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
                <MyPostsContainer/>
            </div>

        </div>
    )
}

export default Profile;