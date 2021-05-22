import React from 'react';
import style from './Status.module.css';


class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activeteEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactiveteEditMode() {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    };

    onChangeUpdateStatus = (e) => {
        this.setState({ status: e.target.value })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    };

    render() {
        return <div className={style.BlockStatus}>
            {!this.state.editMode &&
                <div>
                    <span title='Установить статус' onDoubleClick={this.activeteEditMode}>{this.props.status != '' ? this.props.status : <b>.....</b>}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus={true} maxLength='300' onChange={this.onChangeUpdateStatus} onBlur={this.deactiveteEditMode.bind(this)} value={this.state.status} ></input>
                </div>
            }
        </div>
    }
}

export default Status;