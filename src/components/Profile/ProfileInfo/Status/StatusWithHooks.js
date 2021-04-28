import React, { useEffect, useState } from 'react';
import style from './Status.module.css';


const StatusWithHooks = (props) => {

    let [editMode, SetEditMode] = useState(false);
    let [status, SetStatus] = useState(props.status);

    useEffect(() => {
        SetStatus(props.status)
    }, [props.status]);

    let activeteEditMode = () => {
        SetEditMode(true)
    };

    let onChangeUpdateStatus = (e) => {
        SetStatus(e.target.value)
    };

    let deactiveteEditMode = () => {
        SetEditMode(false);
        props.updateStatus(status)
    };

    return <div className={style.BlockStatus}  >

        {!editMode &&
            <div>
                <span title='Установить статус' onDoubleClick={activeteEditMode}>{props.status !== '' ? props.status : <b>.....</b>}</span>
            </div>
        }

        {editMode && <div>
            <input autoFocus={true} maxLength='300' onChange={onChangeUpdateStatus} onBlur={deactiveteEditMode} value={status} />
        </div>
        }

    </div>
}

export default StatusWithHooks;