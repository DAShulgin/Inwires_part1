import React from 'react';
import AvatarBlok from './AvatarBlock/AvatarBlok';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css'

const Profile = () => {
    return (
        <div className={style.grid2} >

            <div className={style.blok1}>
                <AvatarBlok />
            </div>
            <div className={style.blok2}>
                <div><h1>fullName: Lorem ipsum</h1> </div>
                <div>Status: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam consequuntur inventore cumque deserunt odit.</div>
                <div>lookingForAJob: Lorem ipsum dolor sit amet.</div>
                <div>lookingForAJobDescription: Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div>contacts: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, omnis!</div>
            </div>
            <div className={style.blok3}>
                <div>Мои посты</div>
                <MyPosts />
            </div>

        </div>
    )
}

export default Profile;