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
        <div className="text-dropdown-text">
            <input className="bg-dropdown-bg p-3 w-full rounded-lg focus:bg-primary-bg 
                outline focus:outline-offset-2 focus:outline-dropdown-text focus:outline-4"
                placeholder={inputProps.placeholder}
                value={inputValue}
                onChange={handleInputChange}/>
        </div>
    )
}

export default Input