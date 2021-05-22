import React from 'react';
import notAvatar from '../../../img/notAvatar.png';
import style from './AvatarBlok.module.css';


const AvatarBlok = (props) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
           props.savePhoto(e.target.files[0]);
        }
    }

    return <div>
        <div>
            <img src={props.photos != null ? props.photos : notAvatar} />
        </div>
        <div className={style.loudButton}> {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        </div>
    </div>
}

export default AvatarBlok;