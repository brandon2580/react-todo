import React from 'react'
import { Button } from 'react-bootstrap'

const Todo = (props) => {
    const { id, value, handleRemoveItem } = props;

    return (
        <div className='container-fluid'>
            <div>
                <h1 key={id} className="todo">
                    {value} <Button className='removeButton' onClick={() => handleRemoveItem(id)}>Remove</Button>
                </h1>
            </div>
        </div>
    )
}


export default Todo