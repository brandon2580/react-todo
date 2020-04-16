import React from 'react'
import { Form, Button } from 'react-bootstrap'
import SkeletonButton from 'antd/lib/skeleton/Button'

const InputField = (props) => {
    const [input, setInput] = React.useState('')

    props.callbackHandle(input)

    React.useEffect(() => {
        localStorage.setItem('inputValue', input);
    }, [input]);

    const onChange = e => setInput(e.target.value);

    return (
        <div>
            <Form>
                <div className='row'>
                    <Form.Group controlId="inputForm">
                        <Form.Control type="input" placeholder="Input Item" value={input} onChange={onChange} />
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export default InputField

