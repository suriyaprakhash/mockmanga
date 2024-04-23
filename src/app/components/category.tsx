import React, { useEffect, useRef, useState } from 'react'
import { SelectedCategory } from './hero'
import Dropdown, { DropdownItem } from './shared/dropdown'
import Input from './shared/input';
import { FakerCategory, availableFakerCategories } from './faker/FakerCategory';

interface CategoryProps {
    selectedCategory: SelectedCategory;
    index: number;
    availableCategories: Category[];
    selectedCategories: SelectedCategory[];
    updateCategory: any;
    removeCategory: any;
}

interface Category {
    name: string;
    desc?: string;
    defaultFieldName?: string;
}


function Category({ selectedCategory: initialSelectedCategory, index, availableCategories, selectedCategories,
    updateCategory, removeCategory }: CategoryProps) {

    const availableCategoriesDropdowns: DropdownItem[] = availableCategories.map((availableCategory: Category) => ({
        displayName: availableCategory.name,
        desc: availableCategory.desc,
    }));

    function updateCurrentCategoryDropdown(selectedCategory: string) {
        const category: Category | undefined = availableCategories.find((category: Category) => category.name == selectedCategory);
        const filedName: string = category ? category.defaultFieldName! : '';
        updateCategory({
            name: category?.name,
            userColumnName: filedName
        }, index)
    }

    function updateCurrentFiledName(fieldName: string) {
        updateCategory({
            name: initialSelectedCategory.name,
            userColumnName: fieldName
        }, index)
    }

    function removeCurrentCategory() {
        removeCategory(index);
    }

    return (
        <div className="grid grid-cols-6">
            <div className="p-3 col-span-6 sm:col-span-3">
                <Dropdown initialValue={initialSelectedCategory.name}
                    availableList={availableCategoriesDropdowns} dropdownParentCallback={updateCurrentCategoryDropdown} />
            </div>
            <div className="p-3 col-span-5 sm:col-span-2" key={'dropdown-field'}>
                <Input initialValue={initialSelectedCategory.userColumnName!} inputParentCallback={updateCurrentFiledName}
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