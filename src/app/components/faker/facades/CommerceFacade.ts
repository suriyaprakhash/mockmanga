import { faker } from "@faker-js/faker";
import { FakerFacade } from "./FakerFacade";
import { FakerCategory } from "../FakerCategory";

export class Commerce extends FakerFacade {

    public static department(): string {
        return faker.commerce.department();
    }

    public static isbn(): string {
        return faker.commerce.isbn();
    }
    public static price(): string {
        return faker.commerce.price();
    }
    public static product(): string {
        return faker.commerce.product();
    }
    public static productDescription(): string {
        return faker.commerce.productDescription();
    }
    public static productMaterial(): string {
        return faker.commerce.productMaterial();
    }
    public static productName(): string {
        return faker.commerce.productName();
    }

}

export const commerceFakerCategory: FakerCategory[] = [
    {
        category: 'Commerce - Department',
        desc: 'Department',
        defaultFieldName: 'Department',
        methodName: 'department',
        class: Commerce
    },
    {
        category: 'Commerce - ISBN',
        desc: 'ISBN',
        defaultFieldName: 'ISBN',
        methodName: 'isbn',
        class: Commerce
    },{
        category: 'Commerce - Price',
        desc: 'Price',
        defaultFieldName: 'Price',
        methodName: 'price',
        class: Commerce
    },{
        category: 'Commerce - Product',
        desc: 'Product',
        defaultFieldName: 'Product',
        methodName: 'product',
        class: Commerce
    },
    {
        category: 'Commerce - Product description',
        desc: 'Product description',
        defaultFieldName: 'Product description',
        methodName: 'productDescription',
        class: Commerce
    },
    {
        category: 'Commerce - Product material',
        desc: 'Product material',
        defaultFieldName: 'Product material',
        methodName: 'productMaterial',
        class: Commerce
    },{
        category: 'Commerce - Product name',
        desc: 'Product name',
        defaultFieldName: 'Product name',
        methodName: 'productName',
        class: Commerce
    },
]