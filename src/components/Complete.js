import React from 'react'
import { markCompleted } from '../actions/example'
import { Checkbox } from 'semantic-ui-react'
import { markThatShit } from '../api/TodoAPI'


export default props => {

    function markComplete(e) {
        e.preventDefault()
        //console.log(props.id)
        markThatShit(props.id)
    }
return (
    <Checkbox defaultChecked={props.checked} onClick={markComplete}>Complete</Checkbox>
)
}