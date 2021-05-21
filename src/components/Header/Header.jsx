import React, { useState } from 'react';
import style from './Header.module.css';
import notAvatar from '../../img/notAvatar.png';
import logo from '../../img/logoMain.png';
import exit from '../../img/exit.png';
import { NavLink, Redirect } from 'react-router-dom';


const Header = (props) => {

    const LogOUT = props.LogOUT;

    let [position, SetPosition] = useState(false);

    let OpenMode = () => {
        SetPosition(true);
    };

    let CloseMode = () => {
        SetPosition(false);
    };

    let ClickExitLogOut = () => {
        LogOUT();
        CloseMode();
    }

    let OpenExitIcon = () => {
        return <>
            <div className={style.exit} onMouseOut={CloseMode}><img src={exit} onClick={ClickExitLogOut} title="Выход" /></div>
        </>
    }

    let AvatarBlock = () => {
        return <div className={style.Avatar} onMouseOver={OpenMode}>
            <div className={style.block1}><img src={notAvatar} /> </div>
            {position && <div className={style.block2_active}> <OpenExitIcon /> </div>}
        </div>
    }

    return (<div className={style.headBlok}>
        <div className={style.Block1} >
            <div className = {style.BlockLogo}><img src={logo} alt='logo'/></div>
        </div>

        {props.isAuth === true
            ? <div className={style.Block2}>
                <div className={style.Name}> {props.login} </div>
                <AvatarBlock />
            </div>
            : <>
                <Redirect to={'/login'} />
                <NavLink to='/login'>
                <div className ={style.EnterText}>Авторизоваться</div></NavLink>
            </>
        }


    </div>
    )
}

export default Header;