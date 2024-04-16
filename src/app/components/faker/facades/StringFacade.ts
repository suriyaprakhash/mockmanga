import { faker } from "@faker-js/faker";
import { FakerCategory } from "../FakerCategory";
import { FakerFacade } from "./FakerFacade";
import { Phone } from "./PhoneFacade";

export class Number extends FakerFacade {

    // numbers
    public static oneDigitNumber(): string {
        return faker.string.numeric(1);
    }

    public static twoDigitNumber(): string {
        return faker.string.numeric(2);
    }

    public static threeDigitNumber(): string {
        return faker.string.numeric(3);
    }

    public static fiveDigitNumber(): string {
        return faker.string.numeric(5);
    }

    public static tenDigitNumber(): string {
        return faker.string.numeric(10);
    }

    public static randomSizeMaxFive(): string {
        return faker.string.numeric({ length: { min: 0, max: 5 } });
    }

    public static randomSizeMaxTen(): string {
        return faker.string.numeric({ length: { min: 0, max: 10 } });
    }
}


export const numberFakerCategory: FakerCategory[] = [
    {
        category: 'String - 1 Digit number',
        desc: 'String - 1 Digit number',
        defaultFieldName: 'Number',
        methodName: 'oneDigitNumber',
        type: 'number',
        class: Number
    },
    {
        category: 'String - 2 Digit number',
        desc: 'String - 1 Digit number',
        defaultFieldName: 'Number',
        methodName: 'twoDigitNumber',
        type: 'number',
        class: Number
    },{
        category: 'String - 3 Digit number',
        desc: 'String - 3 Digit number',
        defaultFieldName: 'Number',
        methodName: 'threeDigitNumber',
        type: 'number',
        class: Number
    },
    {
        category: 'String - 5 Digit number',
        desc: 'String - 5 Digit number',
        defaultFieldName: 'Number',
        methodName: 'fiveDigitNumber',
        type: 'number',
        class: Number
    },
    {
        category: 'String - 10 Digit number',
        desc: 'String - 10 Digit number',
        defaultFieldName: 'Phone number',
        methodName: 'tenDigitNumber',
        type: 'number',
        class: Number
    },{
        category: 'String - Number random length 5',
        desc: 'String - Number length 5',
        defaultFieldName: 'Number',
        methodName: 'randomSizeMaxFive',
        type: 'number',
        class: Number
    },
    {
        category: 'String - Number random length 10',
        desc: 'String - Number length 10',
        defaultFieldName: 'Number',
        methodName: 'randomSizeMaxTen',
        type: 'number',
        class: Number
    }
    
]

export class UUID extends FakerFacade {

    // uuid

    public static uuid(): string {
        return faker.string.uuid();
    }
}

export const uuidFakerCategory: FakerCategory[] = [
    {
        category: 'String - UUID',
        desc: 'String - UUID',
        defaultFieldName: 'UUID',
        methodName: 'uuid',
        class: UUID
    }
]

export class Alpha extends FakerFacade {
    // alpha

    public static alphaCaseInsensitiveUptoFive(): string {
        return faker.string.alpha({ length: { min: 0, max: 5 } });
    }

    public static alphaCaseInsensitiveUptoTen(): string {
        return faker.string.alpha({ length: { min: 0, max: 10 } });
    }

    public static alphaCaseInsensitiveUptoTwenty(): string {
        return faker.string.alpha({ length: { min: 0, max: 20 } });
    }
}

export const alphaFakerCategory: FakerCategory[] = [
    {
        category: 'String - Alpha length 5',
        desc: 'String - Alpha length 5',
        defaultFieldName: 'Alpha',
        methodName: 'alphaCaseInsensitiveUptoFive',
        class: Alpha
    },{
        category: 'String - Alpha length 10',
        desc: 'String - Alpha length 10',
        defaultFieldName: 'Alpha',
        methodName: 'alphaCaseInsensitiveUptoTen',
        class: Alpha
    },{
        category: 'String - Alpha length 20',
        desc: 'String - Alpha length 20',
        defaultFieldName: 'Alpha',
        methodName: 'alphaCaseInsensitiveUptoTwenty',
        class: Alpha
    }]

export class AlphaNumeric extends FakerFacade {

    // alphanumeric

    public static alphanumericFive(): string {
        return faker.string.alphanumeric({ length: { min: 0, max: 5 } });
    }

    public static alphanumericTen(): string {
        return faker.string.alphanumeric({ length: { min: 0, max: 10 } });
    }

    public static alphanumericTwenty(): string {
        return faker.string.alphanumeric({ length: { min: 0, max: 20 } });
    }

}


export const alphaNumericFakerCategory: FakerCategory[] = [
    {
        category: 'String - AlphaNumeric length 5',
        desc: 'String - 5 Digit number',
        defaultFieldName: 'AlphaNumeric',
        methodName: 'alphanumericFive',
        class: AlphaNumeric
    },
    {
        category: 'String - AlphaNumeric length 10',
        desc: 'String - AlphaNumeric length 10',
        defaultFieldName: 'AlphaNumeric',
        methodName: 'alphanumericTen',
        class: AlphaNumeric
    },{
        category: 'String - AlphaNumeric length 20',
        desc: 'String - AlphaNumeric length 20',
        defaultFieldName: 'AlphaNumeric',
        methodName: 'alphanumericTwenty',
        class: AlphaNumeric
    }
    
]
