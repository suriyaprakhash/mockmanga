import { faker } from '@faker-js/faker';
import { FakerCategory } from '../FakerCategory';
import { FakerFacade } from './FakerFacade';

export class Person extends FakerFacade {
    
    public static fullName(): string {
        return faker.person.fullName();
    }

    public static firstName(): string {
        return faker.person.firstName();
    }

    public static middleName(): string {
        return faker.person.middleName();
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

    public static age(): string {
        return faker.number.int({
            min: 0, max: 130
        }) + '';
    }
    
    public static email(): string {
        return faker.internet.email();
    }

    public static password(): string {
        return faker.internet.password();
    }

    public static userName(): string {
        return faker.internet.userName();
    }

    public static bio(): string {
        return faker.person.bio();
    }


}

export const personFakerCategory: FakerCategory[] = [
    {
        category: 'Person - Full Name',
        desc: 'Full name',
        defaultFieldName: 'Full name',
        methodName: 'fullName',
        class: Person
    },
    {
        category: 'Person - First Name',
        desc: 'First name',
        defaultFieldName: 'First Name',
        methodName: 'firstName',
        class: Person
    },
    {
        category: 'Person - Middle Name',
        desc: 'Middle name',
        defaultFieldName: 'Middle name',
        methodName: 'middleName',
        class: Person
    },
    {
        category: 'Person - Last Name',
        desc: 'Last name',
        defaultFieldName: 'Last name',
        methodName: 'lastName',
        class: Person
    },
    {
        category: 'Person - Sex',
        desc: 'Sex',
        defaultFieldName: 'Sex',
        methodName: 'sex',
        class: Person
    },
    {
        category: 'Person - Gender',
        desc: 'Gender',
        defaultFieldName: 'Gender',
        methodName: 'gender',
        class: Person
    }, {
        category: 'Person - Age',
        desc: 'Age (0 - 130)',
        defaultFieldName: 'Age',
        type: 'number',
        methodName: 'age',
        class: Person
    },{
        category: 'Person - Email',
        desc: 'Email address',
        defaultFieldName: 'Email',
        methodName: 'email',
        class: Person
    },{
        category: 'Person - Password',
        desc: 'Password',
        defaultFieldName: 'Password',
        methodName: 'password',
        class: Person
    },
    {
        category: 'Person - User Name',
        desc: 'User Name',
        defaultFieldName: 'User Name',
        methodName: 'userName',
        class: Person
    },
    {
        category: 'Person - Bio',
        desc: 'Bio',
        defaultFieldName: 'Bio',
        methodName: 'bio',
        class: Person
    }
    
];
