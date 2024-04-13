import { faker } from '@faker-js/faker';
import { Parameters } from './Parameters';

export class Person {
    
    public static firstName(parameters: Parameters): string[] {
        const firstNames: string[] = [];
        for (let i = 0; i < parameters.count; i++) {
            firstNames.push(faker.person.sex());
        }
        return firstNames;
    }
}