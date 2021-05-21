import React, { useState } from 'react';
import style from './Paginator.module.css';
import cn from 'classnames';
import left from '../../../img/left.png';
import right from '../../../img/right.png';


let Paginator = ({ totaItemsCount, pageSize, currentPage, onPageChanged, portionSize  }) => {

    let pagesCount = Math.ceil(totaItemsCount / pageSize); //определяем сколько всего страниц

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize); //Кол-во всего стр. / на размер порции пагинатора
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // номер границы левой позиции
    let rightPortionPageNumber = portionNumber * portionSize; // номер границы правой позиции


    return <div className={style.pgPosition}>

        {portionNumber > 1 && 
        <img src={left} onClick={() => (setPortionNumber(portionNumber - 1))} title='Назад'/>}

        {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
                return <span className={cn({ [style.selectedPage]: currentPage === p }, style.pageLine)}  key={p}
                    onClick={() => { onPageChanged(p); }}>{p}</span>
            })}
      
        {portionCount > portionNumber && <img src={right} onClick={() => (setPortionNumber(portionNumber + 1))} title='Вперед'/>} 

    </div>
}

export default Paginator;
