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

    const [inputValue, setInputValue] = useState<string>('');
    const [filteredList, setFilteredList] = useState<DropdownItem[]>(resetDropdownTrayItems());
    const [canShowDropdownTray, setCanShowDropdownTray] = useState<boolean>(false);

    function resetDropdownTrayItems() {
        return dropdownProps.inputList;
    }

    function showDropdownTray() {
        setCanShowDropdownTray(true);
    }

    function hideDropdownTray() {
        setCanShowDropdownTray(false);
    }

    function filterDropdownTrayItems(event: any) {
        const inputFilterValue = event.target.value;
        const tempList = filteredList.filter(filteredItem => filteredItem.displayName.includes(inputFilterValue));
        setFilteredList(inputFilterValue.length == 0 ? dropdownProps.inputList : tempList);
    }

    function selectDropdownTrayItem(event: any) {
        console.log('Dropdown: selected item - ', event.target.textContent);
        setInputValue(event.target.textContent);
        dropdownProps.dropdownParentCallback(event.target.textContent);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return (
        <div className="p-3 text-dropdown-text" onMouseEnter={showDropdownTray} onMouseLeave={hideDropdownTray}>
            <button className="w-full sm:w-72">
                <input className="bg-dropdown-bg p-3 w-full sm:w-72 rounded-lg focus:bg-primary-bg 
                    outline focus:outline-offset-2 focus:outline-dropdown-text focus:outline-4" placeholder="Category"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyUp={filterDropdownTrayItems} />
            </button>
            {canShowDropdownTray &&
                <div className="">
                    <ul className="bg-dropdown-bg/70 p-3 sm:w-72 rounded-lg absolute cursor-pointer">
                        {filteredList?.map((item) => (
                            <li className="p-2  hover:bg-secondary-bg/30 rounded-lg" onClick={selectDropdownTrayItem} key={item.displayName}>{item.displayName}</li>
                        ))}
                    </ul>

                </div>
            }

        </div>
    )
}

export default Dropdown