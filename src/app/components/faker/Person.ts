import { faker } from '@faker-js/faker';
import {  Parameters } from './Parameters';
import { FakerCategory } from './FakerCategory';


export const personFakerCategory: FakerCategory[] = [
    {
        category: 'Person - Full Name',
        desc: 'Full name'
    },
    {
        category: 'Person - First Name',
        desc: 'First name'
    },
    {
        category: 'Person - Last Name',
        desc: 'Last name'
    }
];

export class Person {
    
    public static firstName(parameters: Parameters): string[] {
        const firstNames: string[] = [];
        for (let i = 0; i < parameters.count; i++) {
            firstNames.push(faker.person.sex());
        }
        return firstNames;
    }
}