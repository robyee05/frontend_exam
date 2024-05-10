import React, { useState } from 'react';

const Todo = ({ todo, onChange }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
        onChange(); // Átadjuk az állapotváltozást a szülő komponensnek
    };

    return (
        <div className='todoContainer'>
            <div>
                <label>
                    <input type="checkbox" name="" id="listed" checked={checked} onChange={handleCheckboxChange} />
                    {todo}
                </label>
            </div>
        </div>
    );
};

export default Todo;
