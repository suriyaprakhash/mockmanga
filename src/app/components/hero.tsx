import React from 'react'
import Dropdown, { DropdownItem } from './shared/dropdown/dropdown'

function Hero() {

  const inputList: DropdownItem[] = [{
    id: 1,
    displayName: 'one'
  },{
    id: 2,
    displayName: 'two'
  }]

  function categorySelected() {

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