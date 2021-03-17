import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavigationPanel.module.css'

const NavigationPanel = () => {
    return (
        <div className={style.A1} >

            <div>
                <NavLink to='/profile'>Профиль</NavLink>
            </div>

            <div>
                <NavLink to='/dialogs'>Сообщения</NavLink>
            </div>

            <div>
                <NavLink to='/users'>Пользователи</NavLink>
            </div>

            <div>
                <NavLink to='/muzik'>Музыка</NavLink>
            </div>

            <div>
                <NavLink to='/news'>Новости</NavLink>
            </div>

            <div>
                <NavLink to='/setting'>Настройки</NavLink>
            </div>
        </div>
    )
}

export default NavigationPanel;