import React, { useEffect, useId, useState } from 'react'
import Input from './shared/input';
import { Parameters } from './faker/Parameters';
import { FakerCategory, availableFakerCategories } from './faker/FakerCategory';
import { Generator } from './faker/Generator';
import Image from 'next/image'
import CategoryBar, { Category } from './categoryBar';

import {
  DndContext, closestCorners, KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor
} from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { now } from 'moment';

function Hero() {

  const summaId = useId();

  const [availableCategories, setAvailableCategories] = useState<Category[]>(availableFakerCategories?.map((availableCategory: FakerCategory) => ({
    id: 0, // set to 0 - the actual id is manipulated by the selectedCategory length index
    name: availableCategory.category,
    desc: availableCategory.desc,
    defaultFieldName: availableCategory.defaultFieldName
  })));


  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedCategoriesValid, setSelectedCategoriesValid] = useState<boolean>(true);

  const [processing, setProcessing] = useState<boolean>(false);
  const [result, setResult] = useState<{
    message: string, show: boolean
  }>({ message: '', show: false });

  const [parameters, setParameters] = useState<Parameters>({
    count: 0
  });
  const [parametersValid, setParametersValid] = useState<boolean>(false);

  useEffect(() => {
    validateContent();
  }, [selectedCategories, parameters]);


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


  // Button click handler
  const download = (type: 'csv' | 'json') => {
    setProcessing(true); // Indicate processing has started
    //  actualDownload(type);
    const generator = new Generator();
    parameters.type = type;
    const start = new Date();
    console.log('started ' + start)
    setTimeout(() => {
      generator.generate(parameters, selectedCategories).then(() => {
        const end = new Date();
        console.log('ended ' + end);
        console.log('time taken ' + (end.getTime() - start.getTime()));
        setProcessing(false);
        setResult({
          message: (end.getTime() - start.getTime()) + '',
          show: true
        })
        setTimeout(() => {
          setResult({
            message: '', show: false
          })
        }, 5000);
      });
    }, 50)

  }

  function noOfRecords(noOfRecords: string) {
    setParameters({
      count: parseInt(noOfRecords, 10)
    })
    validateContent();
  }

  function removeAllCategoriesAndParameters() {
    setSelectedCategories([])
    setParameters({
      count: 0
    })
  }

  function addCategory() {
    selectedCategories.push({
      id: selectedCategories.length + 1,
      name: '',
      defaultFieldName: ''
    });
    setSelectedCategories(selectedCategories.map((category: Category, index: number) => ({
      id: index,
      name: category.name,
      defaultFieldName: category.defaultFieldName
    })));
  }

  function removeCategory(index: number) {
    selectedCategories.splice(index, 1);
    setSelectedCategories(selectedCategories.map((category: Category, index: number) => ({
      id: index,
      name: category.name,
      defaultFieldName: category.defaultFieldName
    })));
  }

  function updateCategory(selectedCategory: Category, index: number) {
    selectedCategories[index] = {
      id: selectedCategory.id,
      name: selectedCategory.name,
      defaultFieldName: selectedCategory.defaultFieldName
    }
    setSelectedCategories(selectedCategories.map((category: Category, index: number) => ({
      id: index,
      name: category.name,
      defaultFieldName: category.defaultFieldName
    })));
  }

  const getTaskPos = (id: number) => selectedCategories.findIndex((category) => category.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setSelectedCategories((category) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      // const originalPosSelectedCategory = selectedCategories[originalPos];
      // const newPosSelectedCategory = selectedCategories[newPos];
      // selectedCategories[newPos] = originalPosSelectedCategory;
      // selectedCategories[originalPos] = newPosSelectedCategory;

      const originalPosSelectedCategory = selectedCategories[originalPos];
      selectedCategories.splice(originalPos, 1)
      selectedCategories.splice(newPos, 0, originalPosSelectedCategory);

      return selectedCategories.map((category: Category, index: number) => ({
        id: index,
        name: category.name,
        defaultFieldName: category.defaultFieldName
      }))

      // return arrayMove(category, originalPos, newPos);
    });
  };


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );


  return (
    <section>

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

      {selectedCategories.length > 0 && (processing == true || result.show) &&
        <section className="h-[750px] sm:h-[76vh] content-center">
          {processing == true &&
            <div className="text-center animate-pulse transition-all">
              mocking <span className="text-button-danger-bg text-2xl">manga</span>, please wait <span className="animate-ping">...</span>
            </div>
          }
          {result.show &&
            <div className="text-center transition-all">
              generated in <span className="text-button-danger-bg animate-pulse text-2xl">{result.message}</span> ms
            </div>
          }
        </section>
      }


      {selectedCategories.length > 0 && processing === false && result.show === false &&
        <div className="grid grid-cols-3 items-center min-h-[750px] sm:min-h-[76vh] sm:pl-10 sm:pr-10 md:pl-20 md:pr-20">
          <section className="col-span-3 p-12 sm:p-5 sm:col-span-2">
            <div className="flex flex-col">
              <div className="text-button-danger-bg text-2xl pb-3">Get the data you need, instantly</div>
              <div className="p-3">Select from the available datasets</div>

              <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCorners} id={summaId}>

                <SortableContext items={selectedCategories} strategy={verticalListSortingStrategy}>
                  {selectedCategories.map((selectedCategory: Category, index: number) => {
                    return (
                      <CategoryBar key={index} selectedCategory={selectedCategory} index={index} availableCategories={availableCategories}
                        selectedCategories={selectedCategories} updateCategory={updateCategory} removeCategory={removeCategory} />
                    )
                  })}
                </SortableContext>

              </DndContext>



              <div className="p-3 grid grid-cols-8 gap-5">
                {/* {selectedCategoriesValid && selectedCategories.length > 0 && */}
                <button className="p-3 col-span-5 sm:col-start-1 sm:col-end-3 border-1 bg-button-bg text-button-text rounded-lg hover:bg-button-bg-hover 
                    sm:hover:scale-110 transition-all disabled:bg-button-bg/50 disabled:text-button-text/50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  onClick={() => addCategory()}
                  disabled={!selectedCategoriesValid || selectedCategories.length == 0}>
                  Add
                </button>
                {/* } */}
                {selectedCategories.length > 2 &&
                  <button className="p-3 col-span-3 sm:col-start-7 sm:col-end-9 border-2 rounded-2xl 
                    border-button-danger-bg sm:hover:scale-110 transition-all" onClick={() => removeAllCategoriesAndParameters()}>Reset All</button>
                }
              </div>
            </div>
          </section>

          <section className=" col-span-3 p-5 sm:col-span-1">
            {selectedCategories.length > 0 &&
              <div className="p-3 grid grid-cols-2 gap-6">
                {/* <div className="sm:pl-4 col-span-2">Enter the no. of records to generate</div> */}
                <div className="p-3 col-span-2" key={'param'}>
                  <Input initialValue={parameters.count} inputParentCallback={noOfRecords} placeholder="No of records to generate" type="number" />
                  {parameters.count > 500000 &&
                    <div className="p-5"><b className="text-button-danger-bg">Warning </b>
                      Rendering these many records might take a while.</div>
                  }
                </div>
                {/* {selectedCategoriesValid &&
                  parametersValid && */}
                <div className="col-span-2 pl-10 pr-10 grid grid-cols-4 gap-6">
                  <div className="col-span-4 sm:col-span-4 text-center">
                    Generate
                  </div>
                  <button className="p-5 col-span-2 sm:col-span-4 border-1 bg-button-bg text-button-text rounded-lg 
                        hover:bg-button-bg-hover cursor-pointer sm:hover:scale-110 transition-all  
                        disabled:bg-button-bg/50 disabled:text-button-text/50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    disabled={!selectedCategoriesValid || !parametersValid}

                    onClick={() => {
                      // download('csv')
                      setParameters({
                        count: parameters.count,
                        type: 'csv'
                      })
                      // setProcessing(true)
                      download('csv')
                    }
                    }>
                    CSV
                  </button>
                  <button className="p-5 col-span-2 sm:col-span-4 border-1 bg-button-bg text-button-text rounded-lg 
                    hover:bg-button-bg-hover cursor-pointer sm:hover:scale-110 transition-all
                    disabled:bg-button-bg/50 disabled:text-button-text/50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                    disabled={!selectedCategoriesValid || !parametersValid}
                    onClick={() => {
                      // download('json')
                      setParameters({
                        count: parameters.count,
                        type: 'json'
                      })
                      download('json')
                    }}>
                    JSON
                  </button>
                </div>
                {/* } */}
              </div>
            }
          </section>
        </div>
      }

    </section>
  )
}

export default Hero