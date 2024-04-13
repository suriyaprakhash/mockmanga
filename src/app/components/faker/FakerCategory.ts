import { FakerFacade } from "./FakerFacade";
import { personFakerCategory } from "./PersonFacade";

export interface FakerCategory {
    category: string;
    desc?: string;
    methodName?: string;
    class: FakerFacade;
}

export interface SelectedCategory {
    name: string;
    userColumnName?: string;
}

export const availableFakerCategories: FakerCategory[] = initCategories();

function initCategories(): FakerCategory[] {
    const tempCategories: FakerCategory[] = [...personFakerCategory];
    return tempCategories;
}