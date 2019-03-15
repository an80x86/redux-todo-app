import {combineReducers} from 'redux';
import {ADD_TODO, DEL_TODO} from '../actions/actions';

function todo(state,action){
    switch(action.type){
        case ADD_TODO:
            return {
                id:action.id,
                text:action.text
            }
        case DEL_TODO:
            return {
                id:action.id
            }
        default:
            return state;
    }
}

function todos(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return [...state,todo(undefined,action)];
        case DEL_TODO:
            return state.filter(todo=>{
                return todo.id !== action.id
            });
        default:
            return state;
    }
}

const todoApp=combineReducers({
    todos
})

export default todoApp;
