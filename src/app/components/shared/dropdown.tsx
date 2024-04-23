import React, { MouseEventHandler, useState } from 'react'

export interface DropdownItem {
    id?: number,
    displayName: string,
    desc?: string
}

export interface DropdownProps {
    availableList: DropdownItem[],
    // selectedCategories: SelectedCategory[];
    dropdownParentCallback: any,
    // itemIndex: number,
    initialValue: string
}

function Dropdown({ availableList, dropdownParentCallback, initialValue }: DropdownProps) {

    const [filteredList, setFilteredList] = useState<DropdownItem[]>(resetDropdownTrayItems());
    const [canShowDropdownTray, setCanShowDropdownTray] = useState<boolean>(false);

    function resetDropdownTrayItems() {

        return  availableList.map(available => available);
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
        dropdownParentCallback(event.target.textContent);
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        dropdownParentCallback(event.target.textContent);
    }

    return (
        <div className="text-dropdown-text" onMouseEnter={showDropdownTray} onMouseLeave={hideDropdownTray}>
            <button className="w-full  ">
                <input className="bg-dropdown-bg p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Category"
                    value={initialValue}
                    onChange={handleInputChange}
                    onKeyUp={filterDropdownTrayItems} />
            </button>
            {canShowDropdownTray && filteredList.length > 0 &&
                <div className="">
                    <ul className="bg-dropdown-tray-bg/90 p-3 h-32 rounded-lg absolute cursor-pointer scroll-m-2 overflow-y-auto sm:hover:scale-110 transition-all">
                        {filteredList?.map((item) => (
                            <li className="p-2  hover:bg-secondary-bg/30 rounded-lg" onClick={selectDropdownTrayItem} key={item.displayName}>{item.displayName}</li>
                        ))}
                    </ul>
                </div>

            }
            {filteredList.length == 0 &&
                <div className="text-button-danger-bg pt-4">
                    Data set not available
                </div>}

        </div>
    )
}

export default Dropdown