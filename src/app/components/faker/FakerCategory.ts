import { FakerFacade } from "./FakerFacade";
import { personFakerCategory } from "./PersonFacade";

export interface FakerCategory {
    category: string;
    desc?: string;
    defaultFieldName?: string;    
    methodName?: string;
    class: FakerFacade;
}



export const availableFakerCategories: FakerCategory[] = initCategories();

function initCategories(): FakerCategory[] {
    const tempCategories: FakerCategory[] = [...personFakerCategory];
    return tempCategories;
}