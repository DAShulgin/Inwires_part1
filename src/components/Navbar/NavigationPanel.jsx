import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavigationPanel.module.css'
import user from '../../img/user.png'
import dialogs from '../../img/dialogs.png'
import setting from '../../img/setting.png'
import users from '../../img/users.png'
import muzik from '../../img/muzik.png'
import news from '../../img/news.png'

const NavigationPanel = () => {
    return (
        <div className={style.navPanel} >

            <div className={style.linkLine}>
                <NavLink to='/profile'> <img src={user} />Профиль</NavLink>
            </div>

            <div className={style.linkLine}>
                <NavLink to='/dialogs'> <img src={dialogs} />Сообщения</NavLink>
            </div>

            <div className={style.linkLine}>
                <NavLink to='/users'> <img src={users} />Пользователи</NavLink>
            </div>

            <div className={style.linkLine}>
                <NavLink to='/muzik'> <img src={muzik} />Музыка</NavLink>
            </div>

            <div className={style.linkLine}>
                <NavLink to='/news'> <img src={news} />Новости</NavLink>
            </div>

            <div className={style.linkLine}>
                <NavLink to='/setting'> <img src={setting} />Настройки</NavLink>
            </div>
        </div>
    )
}

export default NavigationPanel;