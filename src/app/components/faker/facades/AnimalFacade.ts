import { faker } from "@faker-js/faker";
import { FakerFacade } from "./FakerFacade";
import { FakerCategory } from "../FakerCategory";

export class Animal extends FakerFacade {

    public static bird(): string {
        return faker.animal.bird();
    }

    public static fish(): string {
        return faker.animal.fish();
    }

    public static cat(): string {
        return faker.animal.cat();
    }

    public static dog(): string {
        return faker.animal.dog();
    }

    public static insect(): string {
        return faker.animal.insect();
    }

}

export const animalFakerCategory: FakerCategory[] = [
    {
        category: 'Animal - Bird',
        desc: 'Bird',
        defaultFieldName: 'Bird',
        methodName: 'bird',
        class: Animal
    }, {
        category: 'Animal - Fish',
        desc: 'Fish',
        defaultFieldName: 'Fish',
        methodName: 'fish',
        class: Animal
    }, {
        category: 'Animal - Cat',
        desc: 'Cat',
        defaultFieldName: 'Cat',
        methodName: 'cat',
        class: Animal
    }, {
        category: 'Animal - Dog',
        desc: 'Dog',
        defaultFieldName: 'Dog',
        methodName: 'dog',
        class: Animal
    }, {
        category: 'Animal - Insect',
        desc: 'Insect',
        defaultFieldName: 'Insect',
        methodName: 'insect',
        class: Animal
    },

]