import { faker } from "@faker-js/faker";
import { FakerFacade } from "./FakerFacade";
import { FakerCategory } from "../FakerCategory";

export class Phone extends FakerFacade {

    public static imei(): string {
        return faker.phone.imei();
    }

    public static number(): string {
        return faker.phone.number();
    }

}

export const phoneFakerCategory: FakerCategory[] = [
    {
        category: 'Phone - IMEI',
        desc: 'IMEI',
        defaultFieldName: 'IMEI',
        methodName: 'imei',
        class: Phone
    },
    {
        category: 'Phone - phone number',
        desc: 'Phone number',
        defaultFieldName: 'Phone number',
        methodName: 'number',
        class: Phone
    }
]