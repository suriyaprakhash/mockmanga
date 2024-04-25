import { faker } from "@faker-js/faker";
import { FakerCategory } from "../FakerCategory";
import { FakerFacade } from "./FakerFacade";
import { Phone } from "./PhoneFacade";

export class Internet extends FakerFacade {

    public static email(): string {
        return faker.internet.email();
    }

    public static password(): string {
        return faker.internet.password();
    }
    
    public static userName(): string {
        return faker.internet.userName();
    }

    public static ipv4(): string {
        return faker.internet.ipv4();
    }

    public static ipv6(): string {
        return faker.internet.ipv6();
    }

    public static userAgent(): string {
        return faker.internet.userAgent();
    }

    public static domainName(): string {
        return faker.internet.domainName();
    }
    

}

export const internetFakerCategory: FakerCategory[] = [
    {
        category: 'Internet - Email',
        desc: 'Email address',
        defaultFieldName: 'Email',
        methodName: 'email',
        class: Internet
    },{
        category: 'Internet - Password',
        desc: 'Password',
        defaultFieldName: 'Password',
        methodName: 'password',
        class: Internet
    },
    {
        category: 'Internet - User Name',
        desc: 'User Name',
        defaultFieldName: 'User Name',
        methodName: 'userName',
        class: Internet
    },{
        category: 'Internet - IPV4',
        desc: 'IPV4',
        defaultFieldName: 'IPV4',
        methodName: 'ipv4',
        class: Internet
    },{
        category: 'Internet - IPV6',
        desc: 'IPV6',
        defaultFieldName: 'IPV6',
        methodName: 'ipv6',
        class: Internet
    },
    {
        category: 'Internet - User agent',
        desc: 'User agent',
        defaultFieldName: 'User agent',
        methodName: 'userAgent',
        class: Internet
    },
    {
        category: 'Internet - Domain name',
        desc: 'Domain name',
        defaultFieldName: 'Domain name',
        methodName: 'domainName',
        class: Internet
    },
]