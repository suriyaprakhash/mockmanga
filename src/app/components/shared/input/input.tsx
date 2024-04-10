import React, { useState } from 'react'

interface InputProps {
    placeholder: string;
    inputParentCallback: any;
}

function Input(inputProps: InputProps) {
    
    const [inputValue, setInputValue] = useState<string>('');

    function handleInputChange(event: any) {
        setInputValue(event.target.value);
        inputProps.inputParentCallback(event.target.value);
    }

    return (
        <div>
            <input className="bg-dropdown-bg p-3 rounded-lg focus:bg-primary-bg w-full" placeholder={inputProps.placeholder}
                value={inputValue}
                onChange={handleInputChange}/>
        </div>
    )
}

export default Input