import React from 'react';
import AvatarBlok from './AvatarBlock/AvatarBlok';
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
                <div>
                    <div><textarea></textarea></div>
                    <div><button>Добавить</button></div>
                </div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, molestias!</div>
                <div>Like</div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam architecto nulla consequatur. Unde, laborum aliquid a voluptatem, soluta quasi voluptates harum adipisci fugiat temporibus iste?</div>
                <div>Like</div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur facere beatae error exercitationem distinctio explicabo!</div>
                <div>Like</div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur facere beatae error exercitationem distinctio explicabo!</div>
                <div>Like</div>
                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur facere beatae error exercitationem distinctio explicabo!</div>
                <div>Like</div>
            </div>
        </div>
    )
}

export default Profile;