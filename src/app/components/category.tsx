import React, { useEffect, useRef, useState } from 'react'
import Dropdown, { DropdownItem } from './shared/dropdown'
import Input from './shared/input';
import { FakerCategory, availableFakerCategories } from './faker/FakerCategory';
import Image from 'next/image'

import {
    DndContext, closestCorners, KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface CategoryProps {
    selectedCategory: Category;
    index: number;
    availableCategories: Category[];
    selectedCategories: Category[];
    updateCategory: any;
    removeCategory: any;
}

interface Category {
    id: number; // set to 0 - the actual id is manipulated by the selectedCategory length index
    name: string;
    desc?: string;
    defaultFieldName?: string;
}

function Category({ selectedCategory: initialSelectedCategory, index, availableCategories, selectedCategories,
    updateCategory, removeCategory }: CategoryProps) {


    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: index });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    const availableCategoriesDropdowns: DropdownItem[] = availableCategories.map((availableCategory: Category) => ({
        displayName: availableCategory.name,
        desc: availableCategory.desc,
    }));

    function updateCurrentCategoryDropdown(selectedCategory: string) {
        const category: Category | undefined = availableCategories.find((category: Category) => category.name == selectedCategory);
        const filedName: string = category ? category.defaultFieldName! : '';
        updateCategory({
            id: index,
            name: category?.name,
            defaultFieldName: filedName
        }, index)
    }

    function updateCurrentFiledName(fieldName: string) {
        updateCategory({
            id: index,
            name: initialSelectedCategory.name,
            defaultFieldName: fieldName
        }, index)
    }

    function removeCurrentCategory() {
        removeCategory(index);
    }

    return (
        <div ref={setNodeRef} style={style}
            // className="grid grid-cols-12 border-2 border-primary-text/5 rounded-2xl mb-3 mt-3 sm:hover:scale-105">
            className="grid grid-cols-12 sm:hover:scale-105 touch-none">

            <div className="p-3 col-span-2 sm:col-span-1 flex flex-col items-center">
                <div {...attributes}
                    {...listeners}>
                    <button className="p-3 border-1 bg-dropdown-bg text-dropdown-text rounded-lg hover:bg-button-danger-bg-hover sm:hover:scale-125 transition-all"
                        onClick={() => removeCurrentCategory()}
                        disabled={selectedCategories.length == 0}>

                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 6h.01M12 12h.01M12 18h.01" />
                        </svg>

                    </button>

                </div>
            </div>
            <div className="p-3 col-span-10 sm:col-span-6">
                <Dropdown initialValue={initialSelectedCategory.name}
                    availableList={availableCategoriesDropdowns} dropdownParentCallback={updateCurrentCategoryDropdown} />
            </div>
            <div className="p-3 col-span-10 sm:col-span-4" key={'dropdown-field'}>
                <Input initialValue={initialSelectedCategory.defaultFieldName!} inputParentCallback={updateCurrentFiledName}
                    placeholder="Field name" type="string" />
            </div>
            <div className="p-3 col-span-2 sm:col-span-1 flex flex-col items-center">
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
