import React from 'react'

export interface DropdownItem {
    id: number,
    displayName: string
}

export interface DropdownProps {
    inputList: DropdownItem[],
    dropdownParentCallback: any
}

function Dropdown(dropdownProps: DropdownProps) {

    function filterItems(event: any) {
        console.log('item entered in input box -');
    }


    function selectItem(event: any) {
        console.log('selected item -');
        dropdownProps.dropdownParentCallback();
    }

    return (
        <div>
            <button onKeyUp={filterItems}>
                <input />
            </button>
            <div>
                {dropdownProps.inputList?.map((item) => (
                    <li onClick={selectItem} key={item.id}>{item.displayName}</li>
                ))}
            </div>
        </div>
    )
}

export default Dropdown