import axios from 'axios';
import store from '../store';

export function getTodos() {
    axios.get('http://localhost:3001/api/todos').then(resp => {
        store.dispatch({
            type: "GRAB_TODOS",
            payload: resp.data
        })
        return resp.data
    })
}
const nextID = 0;
export function addTodoz(name) {
    axios.post('http://localhost:3001/api/todos/', {name: name, completed: false}).then(resp =>{
        getTodos()
        return resp.data
    })
}
export function deleteThatShit(id) {
    return axios.delete('http://localhost:3001/todos/' + id)
                .then(response => {
                   getTodos()
                    return response;
                });
  }
  export function markThatShit(id) {
      return axios.get('http://localhost:3001/todos/' + id).then(resp => {
          if(resp.data.completed === false) {
            axios.patch('http://localhost:3001/todos/' + id, { completed: true })
            getTodos()
          } else if(resp.data.completed === true ) {
            axios.patch('http://localhost:3001/todos/' + id, { completed: false })
            getTodos()
          }
      }).then(resp => {
        getTodos()
          return resp
      })
  }