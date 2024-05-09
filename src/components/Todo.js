import React from 'react'

const Todo = ({ todo }) => {
    return (
        <div className='todoContainer'>

            <div>
                <input type="checkbox" name="" id="" />
                {todo}
            </div>
        </div>
    )
}

export default Todo