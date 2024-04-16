import { faker } from "@faker-js/faker";
import { FakerCategory } from "../FakerCategory";
import { FakerFacade } from "./FakerFacade";
import { Phone } from "./PhoneFacade";

export class Location extends FakerFacade {

    public static address(): string {
        return faker.location.streetAddress() + "," + faker.location.secondaryAddress() + "," 
            +  faker.location.city() + "," + faker.location.state() + "," + faker.location.country() + "-" + faker.location.zipCode();
    }

    public static streetAddress(): string {
        return faker.location.streetAddress();
    }

    public static secondaryAddress(): string {
        return faker.location.secondaryAddress();
    }

    public static city(): string {
        return faker.location.city();
    }

    public static state(): string {
        return faker.location.state();
    }

    public static country(): string {
        return faker.location.country();
    }

    public static countryCode(): string {
        return faker.location.countryCode();
    }

    public static zipCode(): string {
        return faker.location.zipCode();
    }

}

export const locationFakerCategory: FakerCategory[] = [
    {
        category: 'Address - full address',
        desc: 'Address - full address',
        defaultFieldName: 'Address',
        methodName: 'address',
        class: Location
    },
    {
        category: 'Address - Street address',
        desc: 'Address - Street address',
        defaultFieldName: 'Street address',
        methodName: 'streetAddress',
        class: Location
    },
    {
        category: 'Address - Secondary address',
        desc: 'Address - Secondary address',
        defaultFieldName: 'Secondary Address',
        methodName: 'secondaryAddress',
        class: Location
    },
    {
        category: 'Address - city',
        desc: 'Address - city',
        defaultFieldName: 'City',
        methodName: 'city',
        class: Location
    },
    {
        category: 'Address - state',
        desc: 'Address - state',
        defaultFieldName: 'State',
        methodName: 'state',
        class: Location
    },
    {
        category: 'Address - country',
        desc: 'Address - country',
        defaultFieldName: 'Country',
        methodName: 'country',
        class: Location
    }
    ,
    {
        category: 'Address - country code',
        desc: 'Address - country code',
        defaultFieldName: 'Country code',
        methodName: 'countryCode',
        class: Location
    },
    {
        category: 'Address - zip code',
        desc: 'Address - zip code',
        defaultFieldName: 'ZipCode',
        methodName: 'zipCode',
        class: Location
    }
    
]