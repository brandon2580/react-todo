import React from 'react'
import { Form, Button } from 'react-bootstrap'
import SkeletonButton from 'antd/lib/skeleton/Button'

const InputField = (props) => {
    const [value, setValue] = React.useState('')
    const [completedInput, setCompletedInput] = React.useState('')

    props.receiveDataFromChild(completedInput)

    const handleChange = e => setValue(e.target.value);

    const handleSubmit = e => {
        e.preventDefault()
        setCompletedInput(value)
        setValue('')
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div className='row'>
                    <Form.Group controlId='inputForm'>
                        <Form.Control type='input' placeholder='Input Item' value={value} onChange={handleChange} />
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export default InputField

