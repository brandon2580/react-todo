import React from 'react'
import { Card } from 'antd';
import InputField from './InputField'

const Todo = (props) => {
    console.log(props)
    return (
        <div className='container-fluid'>
            <Card className='todo-card'>
                <h1 className='header'>Todo List</h1>
                <div className='row d-flex justify-content-center '>
                    <InputField />
                </div>
            </Card>
        </div>
    )
}

export default Todo