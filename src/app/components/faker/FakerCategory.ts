import { FakerFacade } from "./facades/FakerFacade";
import { personFakerCategory } from "./facades/PersonFacade";
import { phoneFakerCategory } from "./facades/PhoneFacade";
import { alphaFakerCategory, alphaNumericFakerCategory, numberFakerCategory, uuidFakerCategory } from "./facades/StringFacade";

export interface FakerCategory {
    category: string;
    desc?: string;
    defaultFieldName?: string;    
    methodName?: string;
    class: FakerFacade;
}

export const availableFakerCategories: FakerCategory[] = initCategories();

function initCategories(): FakerCategory[] {
    const tempCategories: FakerCategory[] = [
        ...personFakerCategory, 
        ...phoneFakerCategory, 
        ...numberFakerCategory, ...uuidFakerCategory, ...alphaFakerCategory, ...alphaNumericFakerCategory];
    return tempCategories;
}