import React from 'react';
import style from  './Preloader.module.css'
import preloadering from '../../../img/preloadering.svg';



const Preloader = () => {

    return <div className = {style.prLoudPosition}>
    <img src={preloadering} />
    </div>
}

export default Preloader;
