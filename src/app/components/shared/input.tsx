import React, { useState } from 'react'

type Type = 'number' | 'string';

export interface InputProps {
    placeholder: string;
    type: Type;
    inputParentCallback: any;
    index?: number;
    initialValue: string | number;
}

function Input({placeholder, type, inputParentCallback, index, initialValue}: InputProps) {


    function handleInputChange(event: any) {
        inputParentCallback(event.target.value, index);
    }

    return (
        <div className="text-dropdown-text">
            <input className="bg-dropdown-bg p-3 w-full rounded-lg focus:outline-none sm:hover:scale-110 transition-all"
                placeholder={placeholder}
                value={initialValue === 0 ? '' : initialValue}
                type={type}
                onChange={handleInputChange}
            />
        </div>
    )
}

export default Input