import React, { useEffect, useState } from 'react'
import Dropdown, { DropdownItem } from './shared/dropdown'
import Input from './shared/input';
import { Parameters } from './faker/Parameters';
import { FakerCategory, availableFakerCategories } from './faker/FakerCategory';
import { Generator } from './faker/Generator';
import Test from './test/test';
import Link from 'next/link';
import Image from 'next/image'
import Category from './category';

export interface SelectedCategory {
  name: string;
  userColumnName?: string;
}

function Hero() {


  const [availableCategories, setAvailableCategories] = useState<Category[]>(availableFakerCategories?.map((availableCategory: FakerCategory) => ({
    name: availableCategory.category,
    desc: availableCategory.desc,
    defaultFieldName: availableCategory.defaultFieldName
  })));

  const [selectedCategories, setSelectedCategories] = useState<SelectedCategory[]>([]);
  const [selectedCategoriesValid, setSelectedCategoriesValid] = useState<boolean>(true);

  const [parameters, setParameters] = useState<Parameters>({
    count: 0
  });
  const [parametersValid, setParametersValid] = useState<boolean>(false);

  useEffect(() => {
    validateContent();
  }, [selectedCategories, parameters]);

  // useEffect(() => {
  //   computeAvailableCategories(selectedCategories);
  // }, [selectedCategories]);


  function validateSelectedCategories(): void {
    const tempAvailableCategories: string[] = availableFakerCategories.map(availableCategory => availableCategory.category);
    const valid: boolean = selectedCategories.filter(selectedCategory => {
      return tempAvailableCategories.filter(availableCategory => availableCategory === selectedCategory.name).length > 0;
    }).length === selectedCategories.length;
    setSelectedCategoriesValid(valid);
  }

  function validateParameters(): void {
    setParametersValid(parameters.count > 0)
  }

  function validateContent(): void {
    validateParameters();
    validateSelectedCategories();
  }

  function download(string: 'csv' | 'json'): void {
    const generator = new Generator();
    parameters.type = string;
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
      name: '',
      userColumnName: ''
    });
    setSelectedCategories(selectedCategories.map(item => item));
  }

  function removeCategory(index: number) {
    selectedCategories.splice(index, 1);
    setSelectedCategories(selectedCategories.map(item => item));
  }

  function updateCategory(selectedCategory: SelectedCategory, index: number) {
    selectedCategories[index] = {
      name: selectedCategory.name,
      userColumnName: selectedCategory.userColumnName
    }
    setSelectedCategories(selectedCategories.map(item => item));
  }


  function computeAvailableCategories(selectedCategories: SelectedCategory[]) {
    // const tempAvailableCategories: (Category | null)[] = availableFakerCategories?.map((availableCategory: FakerCategory) => {
    //   if (selectedCategories.find(selectedCategory => selectedCategory.name === availableCategory.category)) {
    //     return null;
    //   } else {
    //     return {
    //       name: availableCategory.category,
    //       desc: availableCategory.desc,
    //       defaultFieldName: availableCategory.defaultFieldName
    //     }
    //   }
    // })
    // const filteredAvailableCategories: Category[] = [];
    // for (const category of tempAvailableCategories) {
    //   if (category !== null) {
    //     filteredAvailableCategories.push(category);
    //   }
    // }
    const tempAvailableCategories: Category[] = availableFakerCategories.map(availableCategory => ({
      name: availableCategory.category,
      desc: availableCategory.desc,
      defaultFieldName: availableCategory.defaultFieldName
    }));
    setAvailableCategories(tempAvailableCategories);

  }


  return (
    <section>
      {/* Built on top of <Link className="text-button-text" href={'https://fakerjs.dev/'} target='_blank'>faker.js</Link> */}

      {selectedCategories.length == 0 &&
        <section className="grid grid-cols-3 items-center h-[750px] sm:h-[76vh] overflow-auto p-10">

          <div className="col-span-3 sm:col-span-2 p-3 text-3xl sm:pl-12 flex flex-col gap-24 sm:gap-10">

            <div className="text-button-danger-bg text-4xl font-semibold text-left animate-scale">
              Design, test, and iterate with effortless mocks.
            </div>

            <div className="">
              Generate massive amounts of <span className="text-button-danger-bg-hover">realistic random mock </span> data for testing and development.
              <div className="col-span-3 pt-2 text-left text-sm">
                Access massive <span className="text-button-text">csv</span> or <span className="text-button-text">json </span> datasets instantly.
              </div>
            </div>

          </div>

          <div className="col-span-3 sm:col-span-1 items-center text-center pt-10">

            <div className="hidden sm:block">
              <div className="p-10 hidden" style={{
                display: "flex",
                justifyContent: "center",
              }}>
                <Image src="/manga.png" alt="mockManga" width="200" height="200" />
              </div>
            </div>

            <button className="p-3 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover transition-all hover:scale-125" onClick={() => addCategory()}>
              Get Started
            </button>
          </div>

        </section>
      }

      {selectedCategories.length > 0 &&
        <div className="grid grid-cols-3 items-center min-h-[750px] sm:min-h-[76vh]">
          <section className="col-span-3 p-5 sm:col-span-2">
            <div className="p-5">
              <div className="text-button-danger-bg text-2xl pb-3">Get the data you need, instantly</div>
              <div className="">Select from the available datasets</div>
              {selectedCategories.map((selectedCategory: SelectedCategory, index: number) =>
                <div key={index}>
                  <Category selectedCategory={selectedCategory} index={index} availableCategories={availableCategories}
                    selectedCategories={selectedCategories} updateCategory={updateCategory} removeCategory={removeCategory} />
                </div>
              )}
              <div className="p-3 grid grid-cols-8 gap-5">
                {selectedCategoriesValid && selectedCategories.length > 0 &&
                  <button className="p-3 col-span-5 sm:col-start-1 sm:col-end-3 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover 
                    sm:hover:scale-110 transition-all" onClick={() => addCategory()}>
                    Add
                  </button>
                }
                {selectedCategories.length > 3 &&
                  <button className="p-3 col-span-3 sm:col-start-6 sm:col-end-8 border-2 rounded-2xl 
                    border-button-danger-bg sm:hover:scale-110 transition-all" onClick={() => removeAllCategories()}>Reset All</button>
                }
              </div>
            </div>
          </section>

          <section className=" col-span-3 p-5 sm:col-span-1 ">
            {selectedCategories.length > 0 &&
              <div className="p-3 pr-10 grid grid-cols-2 gap-6">
                {/* <div className="sm:pl-4 col-span-2">Enter the no. of records to generate</div> */}
                <div className="p-3 col-span-2" key={'param'}>
                  <Input initialValue={parameters.count} inputParentCallback={noOfRecords} placeholder="No of records to generate" type="number" />
                </div>
                {selectedCategoriesValid &&
                  parametersValid &&
                  <div className="col-span-2 pl-10 pr-10 grid grid-cols-4 gap-6">
                    <div className="p-5 col-span-4 text-center">Generate</div>
                    <button className="p-5 col-span-2 sm:col-span-4 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover cursor-pointer sm:hover:scale-110 transition-all"
                      onClick={() => download('csv')}>
                      CSV
                    </button>
                    <button className="p-5 col-span-2 sm:col-span-4 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover cursor-pointer sm:hover:scale-110 transition-all"
                      onClick={() => download('json')}>
                      JSON
                    </button>
                  </div>
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