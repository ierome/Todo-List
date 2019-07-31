import { VisibilityFilters } from '../actions/example'


const initialState = {
  greeting: '',
  todos: [],
  filter: 'all'
}

export default function(state = initialState, action) {

  const {allState} = state
  switch (action.type) {

    case 'GREETING':
      return {...state, greeting: action.payload}
    case 'ADD_TODO':
      return {...state, todos:[...state.todos, {name: action.payload, completed: false, id: action.id}]}
    case 'DELETE_TODO':
      return {...state, todos: state.todos.filter(item => item.id !== action.payload)}
    case 'COMPLETE':
      return {...state, todos: state.todos.map(todo => {
				if(todo.id  === action.payload){
            todo.completed = !todo.completed
            return todo
				}
				return todo
      })}
      case 'FILTER_TODOS': 
			return {...state, filter: action.filter}
    default:
      return state
  }
}