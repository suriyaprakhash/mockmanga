import React, { MouseEventHandler, useState } from 'react'
import { SelectedCategory } from '../hero';

export interface DropdownItem {
    id?: number,
    displayName: string,
    desc?: string
}

export interface DropdownProps {
    availableList: DropdownItem[],
    selectedCategories: SelectedCategory[];
    dropdownParentCallback: any,
    itemIndex: number,
    initialValue: string
}

function Dropdown({ availableList, dropdownParentCallback, itemIndex, initialValue, selectedCategories }: DropdownProps) {

    const [inputValue, setInputValue] = useState<string>(initialValue);
    const [filteredList, setFilteredList] = useState<DropdownItem[]>(resetDropdownTrayItems());
    const [canShowDropdownTray, setCanShowDropdownTray] = useState<boolean>(false);

    function resetDropdownTrayItems() {
        const temp: DropdownItem[] = availableList.map(available => available);
        selectedCategories.forEach((selectedCategory: any) => {
            while (temp.findIndex((available: any) => available.displayName === selectedCategory.name) >= 0) {
                temp.splice(temp.findIndex((available: any) => available.displayName === selectedCategory.name), 1);
            }
        })

        return temp;
    }

    function showDropdownTray() {
        setCanShowDropdownTray(true);
    }

    function hideDropdownTray() {
        setCanShowDropdownTray(false);
    }

    function filterDropdownTrayItems(event: any) {
        const inputFilterValue = event.target.value;
        const tempList = filteredList.filter(filteredItem => filteredItem.displayName.toLocaleLowerCase().includes(inputFilterValue.toLocaleLowerCase()));
        setFilteredList(inputFilterValue.length == 0 ? availableList : tempList);
    }

    function selectDropdownTrayItem(event: any) {
        setInputValue(event.target.textContent);
        dropdownParentCallback(event.target.textContent, itemIndex);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    return (
        <div className="pb-2  text-dropdown-text" onMouseEnter={showDropdownTray} onMouseLeave={hideDropdownTray}>
            <button className="w-full  ">
                <input className="bg-dropdown-bg p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Category"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyUp={filterDropdownTrayItems} />
            </button>
            {canShowDropdownTray &&
                <div className="">
                    <ul className="bg-dropdown-tray-bg/90 p-3 h-32 rounded-lg absolute cursor-pointer scroll-m-2 overflow-y-auto">
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