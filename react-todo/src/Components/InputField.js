import React from 'react'
import { Form, Button } from 'react-bootstrap'
import SkeletonButton from 'antd/lib/skeleton/Button'

const InputField = (props) => {
    const [input, setInput] = React.useState('')

    props.callbackHandle(input)

    const handleChange = e => setInput(e.target.value);

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div className='row'>
                    <Form.Group controlId="inputForm">
                        <Form.Control type="input" placeholder="Input Item" value={input} onChange={handleChange} />
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export default InputField

