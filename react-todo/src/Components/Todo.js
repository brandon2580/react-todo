import React from 'react'
import { Card } from 'antd';
import InputField from './InputField'

const Todo = (props) => {

    const receiveDataFromChild = (inputValue) => {
        console.log('Input: ' + inputValue)
    }

    return (
        <div className='container-fluid'>
            <Card className='todo-card'>
                <h1 className='header'>Todo List</h1>
                <div className='row d-flex justify-content-center '>
                    <InputField callbackHandle={receiveDataFromChild} />
                </div>
                <h1>Item: {localStorage.getItem('inputValue')}</h1>
            </Card>
        </div>
    )
}

export default Todo