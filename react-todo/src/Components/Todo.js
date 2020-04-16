import React from 'react'
import { Card } from 'antd';
import InputField from './InputField'

const Todo = () => {

    const receiveDataFromChild = (completedInput) => {
        console.log('Input: ' + completedInput)
    }

    return (
        <div className='container-fluid'>
            <Card className='todo-card'>
                <h1 className='header'>Todo List</h1>
                <div className='row d-flex justify-content-center '>
                    <InputField receiveDataFromChild={receiveDataFromChild} saveTodo={console.warn} />
                </div>
                
            </Card>
        </div>
    )
}


export default Todo