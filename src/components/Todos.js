import React from 'react'
import { useSelector } from 'react-redux'
import Delete from './Delete'
import Complete from './Complete'
import '../styles/Form.css'
import { filterTodos } from '../actions/example'
import { Button } from 'semantic-ui-react'

export default props => {
    const todos = useSelector(appState => {
        if(appState.filter === 'all'){
            return appState.todos
          }
          if(appState.filter === 'active'){
              return appState.todos.filter(item => !item.completed)
          }
          if(appState.filter === 'completed'){
            return appState.todos.filter(item => item.completed)
          }
    })

    function all(e) {
        e.preventDefault()
        filterTodos("all")
    }
    function active(e) {
        e.preventDefault()
        filterTodos("active")
    }
    function completed(e) {
        e.preventDefault()
        filterTodos("completed")
    }
    const numbah = todos.filter(item => !item.completed)
    return (
      <>
      <h1>To do list:</h1> {todos.map((item, i) => {
          return (
          <div className="todo" key={i}>
              <Complete id={item.id}></Complete>
              <p className={item.completed ? "completed" : "incomplete"} id={item.id}>{item.name}</p>
              <Delete id={item.id}></Delete>
          </div>
          )
      })}<p>{numbah.length} items left</p>
      <div id="sorts">
          <Button onClick={all}>ALL</Button>
          <Button onClick={active}>ACTIVE</Button>
          <Button onClick={completed}>COMPLETED</Button>
      </div>
      </>
    )
  }