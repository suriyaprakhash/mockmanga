import React from 'react'
import Dropdown, { DropdownItem } from './shared/dropdown/dropdown'

function Hero() {

  const inputList: DropdownItem[] = [{
    displayName: 'one'
  },{
    displayName: 'two'
  }];

  function categorySelected(selectedCategory: string) {
    console.log('Parent Hero: selected category from the Dropdown - ', selectedCategory)
  }

  return (
    <section className="h-[300px] grid grid-cols-3 items-center">
      <section className="col-span-3 p-5 sm:col-span-2">
        <div className="border-2 border-primary-text p-5">
          Main section
            <Dropdown inputList={inputList} dropdownParentCallback={categorySelected}/>
        </div>
      </section>
      <section className="col-span-3 p-5 sm:col-span-1">
        <div className="border-2 border-primary-text p-5">
          Handler section
        </div>
      </section>
    </section>
  )
}

export default Hero