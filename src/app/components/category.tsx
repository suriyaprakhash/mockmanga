import React, { useState } from 'react'
import { SelectedCategory } from './hero'
import Dropdown, { DropdownItem } from './shared/dropdown'
import Input from './shared/input';

interface CategoryProps {
    selectedCategory: SelectedCategory;
    index: number;
    availableFakerCategoriesAsDropdownList: DropdownItem[];
    selectedCategories: SelectedCategory[];
    updateCategory: any;
    updateFiledName: any;
    removeCategory: any;
}


function Category({selectedCategory, index, availableFakerCategoriesAsDropdownList, selectedCategories,
    updateCategory, updateFiledName, removeCategory }: CategoryProps) {

    function updateCurrentCategory(selectedCategory: string, index: number) {
        updateCategory(selectedCategory, index);
    }

    function updateCurrentFiledName(fieldName: string, index: number) {
        updateFiledName(fieldName, index);
    }

    function removeCurrentCategory() {
        removeCategory(index);
    }

    return (
        <div className="grid grid-cols-6">
            <div className="p-3 col-span-6 sm:col-span-3">
                <Dropdown itemIndex={index} initialValue={selectedCategory.name} selectedCategories={selectedCategories}
                    availableList={availableFakerCategoriesAsDropdownList} dropdownParentCallback={updateCurrentCategory} />
            </div>
            <div className="p-3 col-span-5 sm:col-span-2" key={'dropdown-field'}>
                <Input index={index} initialValue={selectedCategory.userColumnName!} inputParentCallback={updateCurrentFiledName}
                    placeholder="Field name" type="string" />
            </div>
            <div className="p-3 col-span-1 sm:col-span-1">
                <button className="p-3 border-1 bg-button-danger-bg text-button-danger-text rounded-lg hover:bg-button-danger-bg-hover sm:hover:scale-125 transition-all"
                    onClick={() => removeCurrentCategory()}
                    disabled={selectedCategories.length == 0}>
                    x
                </button>
            </div>
        </div>
    )
}

export default Category