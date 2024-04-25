import { faker } from "@faker-js/faker";
import { FakerFacade } from "./FakerFacade";
import { FakerCategory } from "../FakerCategory";

export class Science extends FakerFacade {

    public static chemicalElementName(): string {
        return faker.science.chemicalElement().name;
    }

    public static unitSymbol(): string {
        return faker.science.unit().symbol;
    }

}

export const scienceFakerCategory: FakerCategory[] = [
    {
        category: 'Science - Chemical Element Name',
        desc: 'Chemical Element Name',
        defaultFieldName: 'Chemical Element Name',
        methodName: 'chemicalElementName',
        class: Science
    },
    {
        category: 'Science - Unit Symbol',
        desc: 'Unit Symbol',
        defaultFieldName: 'Unit Symbol',
        methodName: 'unitSymbol',
        class: Science
    }
]