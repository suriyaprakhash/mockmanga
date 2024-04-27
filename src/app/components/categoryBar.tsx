import React, { useEffect, useRef, useState } from 'react'
import CategorySelector, { CategorySelectorItem } from './shared/categorySelector'
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

export interface Category {
    id: number; // set to 0 - the actual id is manipulated by the selectedCategory length index
    name: string;
    desc?: string;
    defaultFieldName?: string;
}

function CategoryBar({ selectedCategory: initialSelectedCategory, index, availableCategories, selectedCategories,
    updateCategory, removeCategory }: CategoryProps) {


    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: index });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    const availableCategoriesDropdowns: CategorySelectorItem[] = availableCategories.map((availableCategory: Category) => ({
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
            className="grid grid-cols-12 sm:hover:scale-105 touch-none ">

            <div className="p-3 col-span-2 sm:col-span-1 flex flex-col items-center">
                <div {...attributes}
                    {...listeners}>

                    {index > 0 &&
                        <button className="p-3 border-1 bg-dropdown-bg text-dropdown-text rounded-lg hover:bg-button-danger-bg-hover sm:hover:scale-125 transition-all cursor-grab"
                            onClick={() => removeCurrentCategory()}
                            disabled={selectedCategories.length == 0}>
                            {/* <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 6h.01M12 12h.01M12 18h.01" />
                            </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                                <path d="M5.5 3.5L5.5 14.5C5.5 18.2133 8.18503 21 12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.5 20.5L18.5 9.5C18.5 5.78672 15.815 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 18C21 18 19.1588 20.5 18.5 20.5C17.8412 20.5 16 18 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 5.49998C8 5.49998 6.15878 3.00001 5.49998 3C4.84118 2.99999 3 5.5 3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    }
                    {index === 0 &&
                        <div className="p-3 border-1 bg-dropdown-bg text-dropdown-text rounded-lg cursor-default">
                            {/* <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 6h.01M12 12h.01M12 18h.01" />
                            </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                                <circle cx="17.75" cy="6.25" r="4.25" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="6.25" cy="6.25" r="4.25" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="17.75" cy="17.75" r="4.25" stroke="currentColor" strokeWidth="1.5" />
                                <circle cx="6.25" cy="17.75" r="4.25" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                        </div>
                    }


                </div>
            </div>
            <div className="p-3 col-span-10 sm:col-span-6">
                <CategorySelector initialValue={initialSelectedCategory.name}
                    availableList={availableCategoriesDropdowns} dropdownParentCallback={updateCurrentCategoryDropdown} />
            </div>
            <div className="p-3 col-span-10 sm:col-span-4" key={'dropdown-field'}>
                <Input initialValue={initialSelectedCategory.defaultFieldName!} inputParentCallback={updateCurrentFiledName}
                    placeholder="Field name" type="string" />
            </div>
            <div className="p-3 col-span-2 sm:col-span-1">
                <button className="p-3 border-1 bg-button-danger-bg text-button-danger-text rounded-lg hover:bg-button-danger-bg-hover sm:hover:scale-125 transition-all"
                    onClick={() => removeCurrentCategory()}
                    disabled={selectedCategories.length == 0}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none">
                        <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    {/* https://hugeicons.com/icon/delete-01-stroke-rounded */}
                </button>
            </div>



        </div>
    )
}

export default CategoryBar
