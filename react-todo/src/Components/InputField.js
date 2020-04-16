import React from 'react'
import { Form, Button } from 'react-bootstrap'
import SkeletonButton from 'antd/lib/skeleton/Button'

const InputField = (props, { saveTodo }) => {
    const [value, setValue] = React.useState('')

    props.callbackHandle(value)

    const handleChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault()
        saveTodo(value)
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div className='row'>
                    <Form.Group controlId="inputForm">
                        <Form.Control type="input" placeholder="Input Item" value={value} onChange={handleChange} />
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export default InputField

