import React, { useState } from 'react'
import { addTodos } from '../actions/example'
import Todos from './Todos'
import { Form, Input, Button } from 'semantic-ui-react'
import { addTodoz } from '../api/TodoAPI'


export default props => {
const [name, setName] = useState('')

function addTodo(e) {
    e.preventDefault()
    addTodoz(name)
    setName('')
}
  
    return (
        <div id="mainWrapper">
        <h1>todos</h1>
      <Form id="mainForm" onSubmit={addTodo}>
          <Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="To Do"></Input>
          <Button type="submit">Submit</Button>
      </Form>
      <Todos />
      </div>
    )
  }