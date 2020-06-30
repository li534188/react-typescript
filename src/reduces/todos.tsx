
import {Todos} from '../types/index'
import {ToDosActions, ToDoAction} from '../actions/index'
const todos = (state:Todos = [], action:ToDoAction) => {
    switch (action.type) {
      case ToDosActions.ADD_TODO:
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case ToDosActions.TOGGLE_TODO:
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export default todos
  