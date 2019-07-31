import React from 'react'
import { markCompleted } from '../actions/example'
import { Button } from 'semantic-ui-react'


export default props => {

    function markComplete(e) {
        e.preventDefault()
        //console.log(props.id)
        markCompleted(props.id);
    }
return (
    <Button onClick={markComplete}>Complete</Button>
)
}