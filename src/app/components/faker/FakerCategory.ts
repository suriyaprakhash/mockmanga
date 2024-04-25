import { animalFakerCategory } from "./facades/AnimalFacade";
import { commerceFakerCategory } from "./facades/CommerceFacade";
import { dateFakerCategory } from "./facades/DateFacade";
import { FakerFacade } from "./facades/FakerFacade";
import { financeFakerCategory } from "./facades/FinanceFacade";
import { internetFakerCategory } from "./facades/InternetFacade";
import { jobFakerCategory } from "./facades/JobFacade";
import { locationFakerCategory } from "./facades/LocationFacade";
import { musicFakerCategory } from "./facades/MusicFacade";
import { personFakerCategory } from "./facades/PersonFacade";
import { phoneFakerCategory } from "./facades/PhoneFacade";
import { scienceFakerCategory } from "./facades/ScienceFacade";
import { alphaFakerCategory, alphaNumericFakerCategory, numberFakerCategory, uuidFakerCategory } from "./facades/StringFacade";
import { systemFakerCategory } from "./facades/SystemFacade";
import { vehicleFakerCategory } from "./facades/VehicleFacade";

export interface FakerCategory {
    category: string;
    desc?: string;
    defaultFieldName?: string;
    methodName?: string;
    type?: 'string' | 'number';
    class: FakerFacade;
}

export const availableFakerCategories: FakerCategory[] = initCategories();

function initCategories(): FakerCategory[] {
    const tempCategories: FakerCategory[] = [
        ...personFakerCategory,
        ...phoneFakerCategory,
        ...jobFakerCategory,
        ...numberFakerCategory, ...uuidFakerCategory, ...alphaFakerCategory, ...alphaNumericFakerCategory,
        ...dateFakerCategory,
        ...locationFakerCategory,
        ...internetFakerCategory,
        ...commerceFakerCategory,
        ...financeFakerCategory,
        ...musicFakerCategory,
        ...scienceFakerCategory,
        ...animalFakerCategory,
        ...systemFakerCategory,
        ...vehicleFakerCategory];
    return tempCategories;
}