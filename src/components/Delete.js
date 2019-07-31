import React from 'react'
import { deleteToDo } from '../actions/example'
import { Button } from 'semantic-ui-react'
export default props => {

    function deleteTodo(e) {
        e.preventDefault()
        deleteToDo(props.id)
    }
    return (
        <Button onClick={deleteTodo}>X</Button>
    )
}