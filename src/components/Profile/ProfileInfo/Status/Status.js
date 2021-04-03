import React from 'react';


class Status extends React.Component {

    state = {
        editMode: false
    }

    activeteEditMode = () => {
        this.setState({
            editMode: true 
        })
    };

    deactiveteEditMode() {
        this.setState({
            editMode: false
        })
    };



    render() {
        return <div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick = {this.activeteEditMode}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus = {true} onBlur = {this.deactiveteEditMode.bind(this)} value={this.props.status} ></input>
                </div>
            }
        </div>
    }
}

export default Status;