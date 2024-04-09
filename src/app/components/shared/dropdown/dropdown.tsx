import React, { MouseEventHandler, useState } from 'react'

export interface DropdownItem {
    id?: number,
    displayName: string
}

export interface DropdownProps {
    inputList: DropdownItem[],
    dropdownParentCallback: any
}

function Dropdown(dropdownProps: DropdownProps) {

    const [filteredList, setFilteredList] = useState<DropdownItem[]>(resetDropdown());
    const [showDropdowns, setShowDropdowns] = useState<boolean>(false);


    function resetDropdown() {
        return dropdownProps.inputList;
    }

    function showDropdownTray() {
        setShowDropdowns(true);
    }

    function hideDropdownTray() {
        setShowDropdowns(false);
    }

    function filterItems(event: any) {
        const inputFilterValue = event.target.value;
        const tempList = filteredList.filter(filteredItem => filteredItem.displayName.includes(inputFilterValue));
        setFilteredList(inputFilterValue.length == 0 ? dropdownProps.inputList : tempList);
    }

    function selectItem(event: any) {
        console.log('Dropdown: selected item - ', event.target.textContent);
        dropdownProps.dropdownParentCallback(event.target.textContent);
    }

    return (
        <div className="p-3" onMouseEnter={showDropdownTray} onMouseLeave={hideDropdownTray}>
            <button onKeyUp={filterItems}>
                <input className="bg-dropdown-bg p-2 w-72 rounded-lg focus:bg-primary-bg" placeholder="Category" />
            </button>
            {showDropdowns &&
                <div className="">
                    <ul className="w-72 bg-dropdown-bg/70 p-2 rounded-lg absolute cursor-pointer">
                        {filteredList?.map((item) => (
                            <li className="p-2 hover:bg-secondary-bg rounded-lg" onClick={selectItem} key={item.displayName}>{item.displayName}</li>
                        ))}
                    </ul>

                </div>
            }

        </div>
    )
}

export default Dropdown