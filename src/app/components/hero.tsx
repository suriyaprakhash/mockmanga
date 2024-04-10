import React from 'react'
import Dropdown, { DropdownItem } from './shared/dropdown/dropdown'
import Input from './shared/input/input';

function Hero() {

  const categoryList: DropdownItem[] = [{
    displayName: 'First Name'
  }, {
    displayName: 'Last Name'
  }];

  function categorySelected(selectedCategory: string) {
    console.log('Parent Hero: selected category from the Dropdown - ', selectedCategory)
  }

  function noOfRecords(noOfRecords: string) {
    console.log('Parent Hero: selected no of records from the Input - ', noOfRecords)
  }

  return (
    <section className="grid grid-cols-3 items-center">
      <section className="col-span-3 p-5 sm:col-span-2">
        <div className="border-2 border-primary-text p-5 grid grid-cols-2">
          <div className="col-span-2">
            <Dropdown inputList={categoryList} dropdownParentCallback={categorySelected} />
          </div>
        </div>
      </section>
      <section className="col-span-3 p-5 sm:col-span-1">
        <div className="border-2 border-primary-text p-5 grid grid-cols-2">
          <div className="p-3 col-span-2">
            <Input placeholder="No of records" inputParentCallback={noOfRecords} />
          </div>
          <button className="p-3 col-span-2">Generate</button>
        </div>
      </section>
    </section>
  )
}

export default Hero