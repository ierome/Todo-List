import store from '../store'

export function greet(greeting) {
  store.dispatch({
    type: 'GREETING',
    payload: greeting
  })
}
let nextTodoId = 0
export function addTodos(todo) {
  store.dispatch({
    type: 'ADD_TODO',
    payload: todo,
    id: nextTodoId++
  })
}
export function deleteToDo(id) {
  store.dispatch({
    type: 'DELETE_TODO',
    payload: id
  })
}
export function markCompleted(id) {
  store.dispatch({
    type: 'COMPLETE',
    payload: id
  })
}
export function filterTodos(filter){
	store.dispatch({
	type: 'FILTER_TODOS',
	filter: filter
	})
 }