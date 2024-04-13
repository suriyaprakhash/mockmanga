import { personFakerCategory } from "./Person";

export interface FakerCategory {
    category: string;
    desc?: string;
}

export const availableCategories: FakerCategory[] = initCategories();

function initCategories(): FakerCategory[] {
    const tempCategories: FakerCategory[] = [...personFakerCategory];
    return tempCategories;
}