import React, { useState } from 'react';

const Todo = ({ todo, onChange }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
        onChange();
    };

    return (
        <div className='todoContainer'>
            <label >
                <input type="checkbox" name="" id="listed" checked={checked} onChange={handleCheckboxChange} />
                {todo}
            </label>
        </div>
    );
};

export default Todo;
