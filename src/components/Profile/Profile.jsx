import React from 'react';
import AvatarBlok from './AvatarBlock/AvatarBlok';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css'
import dopStyle from '../common/Preloader/Preloader.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader/Preloader';


const Profile = ({profile, isOwner, savePhoto, status, updateStatus, saveProfile }) => {

     if (!profile) {
        return <div className={dopStyle.prLoudPosition} >
           <Preloader />
        </div>
    } 

    return (
        <div className={style.grid2} >

            <div className={style.blok1}>
                <AvatarBlok isOwner = {isOwner} photos={profile.photos.large} savePhoto = {savePhoto}/>
            </div>
            <div className={style.blok2}>
                <ProfileInfo
                    status = {status} 
                    updateStatus = {updateStatus}
                    profile = {profile}
                    isOwner = {isOwner}
                    saveProfile = {saveProfile}
                />
            </div>
            <div className={style.blok3}>
                <MyPostsContainer />
            </div>

        </div>
    )
}

export default Profile;