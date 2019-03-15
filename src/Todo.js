import React, {Component} from 'react';
import {connect} from 'react-redux';
import {delTodo} from './actions/actions';


class Todo extends Component{
    render() {
        const {dispatch}=this.props;
        return(
            <li className="collection-item">
                {this.props.text}
                &nbsp;
                <a className="waves-effect waves-light btn-small" style={{float:'right', bottom:'5px'}} onClick={()=>dispatch(delTodo(this.props.id))}><i className="material-icons left"></i>Sil</a>
            </li>
        )
    }
}

export default connect(null)(Todo);