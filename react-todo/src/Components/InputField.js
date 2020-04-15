import React from 'react'
import { Form, Button } from 'react-bootstrap'

const InputField = (props) => {
    const [input, setInput] = React.useState('')

    return (
        <div>
            <Form >
                <div className='row'>
                    <Form.Group controlId="inputForm">
                        <Form.Control type="input" placeholder="Input Item" />
                    </Form.Group>
                    <Button className='save-button' variant="primary">Save</Button>
                </div>
            </Form>
        </div>
    )
}

export default InputField

