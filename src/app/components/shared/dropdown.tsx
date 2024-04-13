import React, { MouseEventHandler, useState } from 'react'

export interface DropdownItem {
    id?: number,
    displayName: string,
    desc?: string
}

export interface DropdownProps {
    availableList: DropdownItem[],
    dropdownParentCallback: any,
    itemIndex: number,
    initialValue: string
}

function Dropdown({availableList, dropdownParentCallback, itemIndex, initialValue} : any) {

    const [inputValue, setInputValue] = useState<string>(initialValue);
    const [filteredList, setFilteredList] = useState<DropdownItem[]>(resetDropdownTrayItems());
    const [canShowDropdownTray, setCanShowDropdownTray] = useState<boolean>(false);

    function resetDropdownTrayItems() {
        return availableList;
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
        setFilteredList(inputFilterValue.length == 0 ? availableList : tempList);
    }

    function selectDropdownTrayItem(event: any) {
        console.log('Dropdown: selected item - ', event.target.textContent);
        setInputValue(event.target.textContent);
        dropdownParentCallback(event.target.textContent, itemIndex);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return (
        <div className="pb-2  text-dropdown-text" onMouseEnter={showDropdownTray} onMouseLeave={hideDropdownTray}>
            <button className="w-full  ">
                <input className="bg-dropdown-bg p-3 w-full  rounded-lg focus:bg-primary-bg 
                    outline focus:outline-offset-2 focus:outline-dropdown-text focus:outline-4" 
                    placeholder="Category"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyUp={filterDropdownTrayItems} />
            </button>
            {canShowDropdownTray &&
                <div className="">
                    <ul className="bg-dropdown-bg/70 p-3  rounded-lg absolute cursor-pointer">
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