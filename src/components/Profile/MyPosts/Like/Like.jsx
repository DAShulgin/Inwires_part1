import React from 'react';
import style  from './Like.module.css'
import like from '../../../../img/like.png'

const Like = (props) => {

    return <div className =  {style.item}>  
    <div>
        <span>{props.like}</span>
        <span><img src = {like} /> </span>
    </div>    
        
    </div>
}
export default Like;

