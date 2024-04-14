import React, { useEffect, useState } from 'react'
import Dropdown, { DropdownItem } from './shared/dropdown'
import Input from './shared/input';
import { Parameters } from './faker/Parameters';
import { FakerCategory, availableFakerCategories } from './faker/FakerCategory';
import { Generator } from './faker/Generator';
import Test from './test/test';
import Link from 'next/link';

export interface SelectedCategory {
  name: string;
  userColumnName?: string;
}

function Hero() {

  const availableFakerCategoriesAsDropdownList: DropdownItem[] = availableFakerCategories?.map((availableCategory: FakerCategory) => ({
    displayName: availableCategory.category,
    desc: availableCategory.desc
  }));

  const [selectedCategories, setSelectedCategories] = useState<SelectedCategory[]>([]);
  const [selectedCategoriesValid, setSelectedCategoriesValid] = useState<boolean>(true);
  const [parameters, setParameters] = useState<Parameters>({
    count: 0
  });
  const [parametersValid, setParametersValid] = useState<boolean>(false);

  useEffect(() => {
    validateContent();
  }, [selectedCategories, parameters]);

  function validateSelectedCategories(): void {
    const availableCategories: string[] = availableFakerCategoriesAsDropdownList.map(availableCategory => availableCategory.displayName);
    const valid: boolean = selectedCategories.filter(selectedCategory => {
      return availableCategories.filter(availableCategory => availableCategory === selectedCategory.name).length > 0;
    }).length === selectedCategories.length;
    setSelectedCategoriesValid(valid);
    console.log('validateSelectedCategories ', valid, selectedCategoriesValid)
  }

  function validateParameters(): void {
    setParametersValid(parameters.count > 0)
  }

  function validateContent(): void {
    validateParameters();
    validateSelectedCategories();
  }

  function makeJson(): void {
    const generator = new Generator();
    generator.generate(parameters, selectedCategories);
  }

  function noOfRecords(noOfRecords: string) {
    setParameters({
      count: parseInt(noOfRecords, 10)
    })
    validateContent();
  }

  function removeAllCategories() {
    setSelectedCategories([])
  }

  function addCategory() {
    selectedCategories.push({
      name: ''
    });
    setSelectedCategories(selectedCategories.map(item => item));

  }

  function removeCategory(index: number) {
    selectedCategories.splice(index, 1);
    setSelectedCategories(selectedCategories.map(item => item));
  }

  function updateCategory(selectedCategory: string, index: number) {
    selectedCategories[index] = {
      name: selectedCategory,
      userColumnName: selectedCategories[index].userColumnName
    }
    setSelectedCategories(selectedCategories.map(item => item));
  }

  function updateFiledName(fieldName: string, index: number) {
    selectedCategories[index] = {
      name: selectedCategories[index].name,
      userColumnName: fieldName
    }
    setSelectedCategories(selectedCategories.map(item => item));
  }


  return (
    <section>

      {selectedCategories.length == 0 &&
        <section className="grid grid-cols-3 items-center sm:h-[70vh] overflow-auto p-10">
          <div className="col-span-3 sm:col-span-2 p-3 text-3xl pl-12">
            Generate massive amounts of <span className="text-button-danger-bg-hover">realistic mock </span>realistic mock data for testing and development.
            <div className="col-span-3 p-3 text-left text-sm">
              Download the dataset in the <span className="text-button-text">csv</span> or <span className="text-button-text">json </span> format
              {/* Built on top of <Link className="text-button-text" href={'https://fakerjs.dev/'} target='_blank'>faker.js</Link> */}
            </div>
          </div>
          <div className="col-span-3 sm:col-span-1 p-16">
            <button className="p-3 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover" onClick={() => addCategory()}>
              Get Started
            </button>
          </div>

        </section>
      }

      {selectedCategories.length > 0 &&
        <div className="grid grid-cols-3 items-center sm:min-h-[70vh]">
          <section className="col-span-3 p-5 sm:col-span-2">
            <div className="p-5">
              {selectedCategories.map((selectedCategory: SelectedCategory, index: number) =>
                <div key={selectedCategory.name} className="grid grid-cols-6">
                  <div className="p-3 col-span-6 sm:col-span-3">
                    <Dropdown itemIndex={index} initialValue={selectedCategory.name} selectedCategories={selectedCategories}
                      availableList={availableFakerCategoriesAsDropdownList} dropdownParentCallback={updateCategory} />
                  </div>
                  <div className="p-3 col-span-5 sm:col-span-2">
                    <Input placeholder="Field name" type="string" initialValue={selectedCategory.userColumnName!} inputParentCallback={updateFiledName} index={index} />
                  </div>
                  <div className="p-3 col-span-1 sm:col-span-1">
                    <button className="p-3 border-1 bg-button-danger-bg text-button-danger-text rounded-lg hover:bg-button-danger-bg-hover" onClick={() => removeCategory(index)}
                      disabled={selectedCategories.length == 0}>
                      x
                    </button>
                  </div>
                </div>
              )}
              <div className="p-3">
                {selectedCategoriesValid && selectedCategories.length > 0 &&
                  <button className="p-3 col-span-2 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover" onClick={() => addCategory()}>
                    Add
                  </button>
                }

                {selectedCategories.length > 3 && <button className="p-3 col-span-2" onClick={() => removeAllCategories()}>Reset All</button>}
              </div>
            </div>
          </section>

          <section className=" col-span-3 p-5  sm:col-span-1">
            {selectedCategories.length > 0 &&
              <div className="p-5 grid grid-cols-2 gap-6">
                <div className="p-3 col-span-2" key={'param'}>
                  <Input placeholder="No of records" type="number" initialValue={parameters.count} inputParentCallback={noOfRecords} />
                </div>
                {selectedCategoriesValid &&
                  parametersValid &&
                  <button className="p-5 col-span-2 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover cursor-pointer" onClick={makeJson}>
                    Generate
                  </button>
                }
              </div>
            }
          </section>
        </div>
      }

    </section>
  )
}

export default Hero