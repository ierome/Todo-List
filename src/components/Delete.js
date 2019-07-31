import React from 'react'
import { deleteToDo } from '../actions/example'
import { Button } from 'semantic-ui-react'
import { deleteThatShit } from '../api/TodoAPI'
import '../styles/Form.css'
export default props => {

    function deleteTodo(e) {
        e.preventDefault()
        deleteThatShit(props.id)
    }
    return (
        <Button className="deleteButton" onClick={deleteTodo}>X</Button>
    )
}