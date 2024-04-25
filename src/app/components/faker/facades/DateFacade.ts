import { faker } from "@faker-js/faker";
import { FakerCategory } from "../FakerCategory";
import { FakerFacade } from "./FakerFacade";
import { Phone } from "./PhoneFacade";
import moment from 'moment';

export class DateFacade extends FakerFacade {

    public static justYear(): string {
        return  (moment(faker.date.anytime())).format('YYYY');
    }

    public static justDate(): string {
        return  (moment(faker.date.anytime())).format('DD-MMM-YYYY');
    }

    public static justDateTime(): string {
        return  (moment(faker.date.anytime())).format('DD-MMM-YYYY HH:mm:ss');
    }

    public static dateTimeLast10years(): string {
        return (moment(faker.date.past({years: 10}))).format('DD-MMM-YYYY HH:mm:ss');
    }

    public static dateTimeLast100years(): string {
        return (moment(faker.date.past({years: 100}))).format('DD-MMM-YYYY HH:mm:ss');
    }

    public static dateTimeNext10years(): string {
        return (moment(faker.date.future({years: 10}))).format('DD-MMM-YYYY HH:mm:ss');
    }

    public static dateTimeNext100years(): string {
        return (moment(faker.date.future({years: 100}))).format('DD-MMM-YYYY HH:mm:ss');
    }

}

export const dateFakerCategory: FakerCategory[] = [
    {
        category: 'Date - Anytime just year in YYYY',
        desc: 'Date - Anytime just year',
        defaultFieldName: 'Year',
        methodName: 'justYear',
        class: DateFacade
    },
    {
        category: 'Date - Anytime just date in DD-MMM-YYYY',
        desc: 'Date - Anytime just date',
        defaultFieldName: 'Date',
        methodName: 'justDate',
        class: DateFacade
    },
    {
        category: 'Date - Anytime in DD-MMM-YYYY HH:mm:ss',
        desc: 'Date - Anytime in DD-MMM-YYYY HH:mm:ss',
        defaultFieldName: 'Date',
        methodName: 'justDateTime',
        class: DateFacade
    },{
        category: 'Date - within last 10 years in DD-MMM-YYYY HH:mm:ss',
        desc: 'Date - within last 10 years in DD-MMM-YYYY HH:mm:ss',
        defaultFieldName: 'Date',
        methodName: 'dateTimeLast10years',
        class: DateFacade
    },
    {
        category: 'Date - within last 100 years in DD-MMM-YYYY HH:mm:ss',
        desc: 'Date -within last 100 years in DD-MMM-YYYY HH:mm:ss',
        defaultFieldName: 'Date',
        methodName: 'dateTimeLast100years',
        class: DateFacade
    },{
        category: 'Date - in next 10 years in DD-MMM-YYYY HH:mm:ss',
        desc: 'Date - in next 10 years in DD-MMM-YYYY HH:mm:ss',
        defaultFieldName: 'Date',
        methodName: 'dateTimeNext10years',
        class: DateFacade
    },
    {
        category: 'Date - in next 100 years in DD-MMM-YYYY HH:mm:ss',
        desc: 'Date - in next 100 years in DD-MMM-YYYY HH:mm:ss',
        defaultFieldName: 'Date',
        methodName: 'dateTimeNext100years',
        class: DateFacade
    }
]