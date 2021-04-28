import React from 'react';
import style from './Paginator.module.css';


let Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged }) => {

    let pageCount = Math.ceil( totalUserCount / pageSize); //определяем сколько всего страниц

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div className={style.pageList}>
            {pages.map(p => { return <span className={currentPage === p && style.selectedPage} onClick={() => { onPageChanged(p) }} >{p}</span> })}
        </div>
    )
}


export default Paginator;
