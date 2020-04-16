import React from 'react'

const InputField = (props) => {
    const [value, setValue] = React.useState('')
    const { handleAddTodo } = props

    const handleChange = e => setValue(e.target.value);

    return (
        <div>
            <div className='row'>
                <input type='input' placeholder='Input Item' value={value} onChange={handleChange}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            handleAddTodo({ id: new Date().getTime(), value: value });
                            setValue('');
                        }
                    }} />
            </div>
        </div>
    )
}

export default InputField

