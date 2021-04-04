import React from 'react';
import AvatarBlok from './AvatarBlock/AvatarBlok';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import style from './Profile.module.css'
import dopStyle from '../common/Preloader/Preloader.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader/Preloader';


const Profile = (props) => {

    if (!props.profile) {
        return <div className={dopStyle.prLoudPosition} >
            <Preloader />
        </div>
    }

    return (
        <div className={style.grid2} >

            <div className={style.blok1}>
                <AvatarBlok photos={props.profile.photos.large} />
            </div>
            <div className={style.blok2}>
                <ProfileInfo
                    status = {props.status} 
                    updateStatus = {props.updateStatus}
                    fullName={props.profile.fullName}
                    aboutMe={props.profile.aboutMe}
                    lookingForAJob={props.profile.lookingForAJob}
                    lookingForAJobDescription={props.profile.lookingForAJobDescription}
                    contacts={props.profile.contacts}
                />
            </div>
            <div className={style.blok3}>
                <MyPostsContainer />
            </div>

        </div>
    )
}

export default Profile;