import React, { useState } from 'react'
import Dropdown, { DropdownItem } from './shared/dropdown'
import Input from './shared/input';
import { Person } from './faker/Person';
import { Parameters } from './faker/Parameters';

function Hero() {

  interface Category {
    name: string;
    userColumnName?: string;
  }

  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const [count, setCount] = useState<number>(0);
  const [parameters, setParameters] = useState<Parameters>({
    count: 0
  });

  const availableCategories: DropdownItem[] = [{
    displayName: 'zero'
  }, {
    displayName: 'one this is the poerson object full name'
  }, {
    displayName: 'two'
  }, {
    displayName: 'three'
  }, {
    displayName: 'four'
  }, {
    displayName: 'five'
  }, {
    displayName: 'six'
  }];

  function noOfRecords(noOfRecords: string) {
    console.log('Parent Hero: selected no of records from the Input - ', noOfRecords);
    setParameters({
      count: parseInt(noOfRecords, 10)
    })
  }

  function generate() {
    console.log('Generated data');
    console.log(Person.firstName(parameters));
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
      name: selectedCategory
    }
    setSelectedCategories(selectedCategories.map(item => item));
    console.log(selectedCategories)
  }

  return (
    <section className="grid grid-cols-3 items-center">
      <section className="col-span-3 p-5 sm:col-span-2">
        <div className="border-2 border-primary-text p-5">
          {selectedCategories.map((category: Category, index: number) =>
            <div key={category.name} className="grid grid-cols-6">
              <div className="p-3 col-span-6 sm:col-span-3"> <Dropdown
                itemIndex={index} initialValue={category.name} availableList={availableCategories} dropdownParentCallback={updateCategory} /></div>
              <div className="p-3 col-span-4 sm:col-span-2"><Input placeholder="Field name" type="string" inputParentCallback={undefined} /></div>

              <button className="p-3 col-span-2 sm:col-span-1" onClick={() => removeCategory(index)} disabled={selectedCategories.length == 0}>Remove</button>
            </div>
          )}
          <button className="p-3 col-span-2" onClick={() => addCategory()}>{selectedCategories.length > 0 ? 'Add' : 'Get started'}</button>
        </div>
      </section>

      <section className=" col-span-3 p-5 sm:col-span-1">
        {selectedCategories.length > 0 &&
          <div className="border-2 border-primary-text p-5 grid grid-cols-2">
            <div className="p-3 col-span-2">
              <Input placeholder="No of records" type="number" inputParentCallback={noOfRecords} />
            </div>
            <button className="p-3 col-span-2" onClick={generate} disabled={selectedCategories.length == 0}>Generate</button>
          </div>
        }
      </section>


    </section>
  )
}

export default Hero