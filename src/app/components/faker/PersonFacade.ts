import { faker } from '@faker-js/faker';
import { FakerCategory } from './FakerCategory';
import { FakerFacade } from './FakerFacade';

export class Person extends FakerFacade {
    
    public static fullName(): string {
        return faker.person.fullName();
    }

    public static firstName(): string {
        return faker.person.firstName();
    }

    public static lastName(): string {
        return faker.person.lastName();
    }

    public static sex(): string {
        return faker.person.sex();
    }

    public static gender(): string {
        return faker.person.gender();
    }

    public static bio(): string {
        return faker.person.bio();
    }

    public static jobTitle(): string {
        return faker.person.jobTitle();
    }

    public static jobDescriptor(): string {
        return faker.person.jobDescriptor();
    }

    public static jobArea(): string {
        return faker.person.jobArea();
    }

    public static jobType(): string {
        return faker.person.jobType();
    }
}

export const personFakerCategory: FakerCategory[] = [
    {
        category: 'Person - Full Name',
        desc: 'Full name',
        methodName: 'fullName',
        class: Person
    },
    {
        category: 'Person - First Name',
        desc: 'First name',
        methodName: 'firstName',
        class: Person
    },
    {
        category: 'Person - Last Name',
        desc: 'Last name',
        methodName: 'lastName',
        class: Person
    },
    {
        category: 'Person - Sex',
        desc: 'Sex',
        methodName: 'sex',
        class: Person
    },
    {
        category: 'Person - Gender',
        desc: 'Gender',
        methodName: 'gender',
        class: Person
    },
    {
        category: 'Person - Bio',
        desc: 'Bio',
        methodName: 'bio',
        class: Person
    },
    {
        category: 'Person -  Job Title',
        desc: 'jobTitle',
        methodName: 'jobTitle',
        class: Person
    },
    {
        category: 'Person -  Job Description',
        desc: 'jobDescriptor',
        methodName: 'jobDescriptor',
        class: Person
    },
    {
        category: 'Person -  Job Area',
        desc: 'jobArea',
        methodName: 'jobArea',
        class: Person
    },
    {
        category: 'Person - Job Type',
        desc: 'jobType',
        methodName: 'jobType',
        class: Person
    }
    
];
