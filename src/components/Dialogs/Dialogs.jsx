import React from 'react';
import style from './Dialogs.module.css'

const Dialogs = (props) => {
    return (<div className={style.dialogs}>
        <div className={style.dialogsItems}>
            <div className={style.dialog + ' ' + style.active}>Антон</div>
            <div className={style.dialog}>Дмитрий</div>
            <div className={style.dialog}>Анжела</div>
            <div className={style.dialog}>Света</div>
            <div className={style.dialog}>Виктор</div>
        </div>
        <div className = {style.messagesItems}>
        <div className = {style.message}>Lorem ipsum dolor sit.</div>
        <div className = {style.message}>Lorem ipsum dolor sit amet consectetur.</div>
        <div className = {style.message}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        <div className = {style.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolores itaque placeat at ullam, totam sint mollitia quod eum magnam incidunt corrupti? Quia, eveniet asperiores!</div>
        <div className = {style.message}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, expedita.</div>

        </div>

    </div>
    )
}

export default Dialogs;