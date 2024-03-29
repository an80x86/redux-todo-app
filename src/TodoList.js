import React, {Component} from 'react';
import Todo from './Todo';

export default class TodoList extends Component{
    render() {
        return(
            <ul className="collection">
                {this.props.todos.map(todo=>
                    <Todo key={todo.id} {...todo} />
                )}
            </ul>
        )
    }
}