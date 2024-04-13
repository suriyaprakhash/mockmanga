import React, { useState } from 'react'
import Dropdown, { DropdownItem } from './shared/dropdown'
import Input from './shared/input';
import { Parameters } from './faker/Parameters';
import { SelectedCategory, FakerCategory, availableFakerCategories } from './faker/FakerCategory';
import { Generator } from './faker/Generator';


function Hero() {

  const availableFakerCategoriesAsDropdownList: DropdownItem[] = availableFakerCategories?.map((availableCategory: FakerCategory) => ({
    displayName: availableCategory.category,
    desc: availableCategory.desc
  }));


  const [selectedCategories, setSelectedCategories] = useState<SelectedCategory[]>([]);

  const [parameters, setParameters] = useState<Parameters>({
    count: 0
  });

  function noOfRecords(noOfRecords: string) {
    console.log('Parent Hero: selected no of records from the Input - ', noOfRecords);
    setParameters({
      count: parseInt(noOfRecords, 10)
    })
  }

  function makeJson() {
    const generator = new Generator();
    generator.generate(parameters, selectedCategories);
  }

  function removeAllCategories() {
    setSelectedCategories([])
  }

  function addCategory() {
    selectedCategories.push({
      name: ''
    });
    setSelectedCategories(selectedCategories.map(item => item));
    console.log(selectedCategories)
  }

  function removeCategory(index: number) {
    selectedCategories.splice(index, 1);
    setSelectedCategories(selectedCategories.map(item => item));
    console.log(selectedCategories)
  }

  function updateCategory(selectedCategory: string, index: number) {
    selectedCategories[index] = {
      name: selectedCategory,
      userColumnName: ''
    }
    setSelectedCategories(selectedCategories.map(item => item));
    console.log(selectedCategories)
  }

  function updateFiledName(fieldName: string, index: number) {
    selectedCategories[index] = {
      name: selectedCategories[index].name,
      userColumnName: fieldName
    }
    console.log(selectedCategories)
  }


  return (
    <section className="grid grid-cols-3 items-center">
      <section className="col-span-3 p-5 sm:col-span-2">
        <div className="border-2 border-primary-text p-5">
          {selectedCategories.map((category: SelectedCategory, index: number) =>
            <div key={category.name} className="grid grid-cols-6">
              <div className="p-3 col-span-6 sm:col-span-3">
                <Dropdown itemIndex={index} initialValue={category.name} availableList={availableFakerCategoriesAsDropdownList} dropdownParentCallback={updateCategory} />
              </div>
              <div key={category.name} className="p-3 col-span-4 sm:col-span-2">
                <Input placeholder="Field name" type="string" inputParentCallback={updateFiledName} index={index} />
              </div>
              <button className="p-3 col-span-2 sm:col-span-1" onClick={() => removeCategory(index)} disabled={selectedCategories.length == 0}>Remove</button>
            </div>
          )}
          <button className="p-3 col-span-2" onClick={() => addCategory()}>{selectedCategories.length > 0 ? 'Add' : 'Get started'}</button>
          {selectedCategories.length > 3 && <button className="p-3 col-span-2" onClick={() => removeAllCategories()}>Reset All</button>}
        </div>
      </section>

      <section className=" col-span-3 p-5 sm:col-span-1">
        {selectedCategories.length > 0 &&
          <div className="border-2 border-primary-text p-5 grid grid-cols-2">
            <div className="p-3 col-span-2">
              <Input placeholder="No of records" type="number" inputParentCallback={noOfRecords} />
            </div>
            <button className="p-3 col-span-2" onClick={makeJson} disabled={selectedCategories.filter(category => category.name === '').length != 0}>Generate</button>
          </div>
        }
      </section>

    </section>
  )
}

export default Hero