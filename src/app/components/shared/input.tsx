import React, { useState } from 'react'

type Type = 'number' | 'string';

interface InputProps {
    placeholder: string;
    type: Type;
    inputParentCallback: any;
    index?: number;
    initialValue: string | number;
}

function Input(inputProps: InputProps) {

    const [inputValue, setInputValue] = useState<string | number>(init());

    function init() {
        if (typeof inputProps.initialValue === 'number' && inputProps.initialValue === 0) {
            return ''
        } else {
            return inputProps.initialValue === undefined ? '' : inputProps.initialValue
        }
    }

    function handleInputChange(event: any) {
        // if (inputProps.type === 'number') {
        //     if (!Number.isNaN(Number(event.target.value))) {
        //         setInputValue(Number(event.target.value) + '');
        //     }
        // } else {
        //     setInputValue(event.target.value);
        // }
        setInputValue(event.target.value);
        inputProps.inputParentCallback(event.target.value, inputProps.index);
    }

    return (
        <div className="text-dropdown-text">
            <input className="bg-dropdown-bg p-3 w-full rounded-lg focus:outline-none sm:hover:scale-110 transition-all"
                placeholder={inputProps.placeholder}
                value={inputValue}
                type={inputProps.type}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default Input