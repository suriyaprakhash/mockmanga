import { faker } from "@faker-js/faker";
import { FakerCategory } from "../FakerCategory";
import { FakerFacade } from "./FakerFacade";
import { Phone } from "./PhoneFacade";
import moment from 'moment';

export class DateFacade extends FakerFacade {

    public static anytimeJustDate(): string {
        return  (moment(faker.date.anytime())).format('DD-MMM-YYYY');
    }

    public static anytime(): string {
        return  (moment(faker.date.anytime())).format('DD-MMM-YYYY HH:mm:ss');
    }

    public static last10years(): string {
        return (moment(faker.date.past({years: 10}))).format('DD-MMM-YYYY HH:mm:ss');
    }

    public static last100years(): string {
        return (moment(faker.date.past({years: 100}))).format('DD-MMM-YYYY HH:mm:ss');
    }

    public static next10years(): string {
        return (moment(faker.date.future({years: 10}))).format('DD-MMM-YYYY HH:mm:ss');
    }

    public static next100years(): string {
        return (moment(faker.date.future({years: 100}))).format('DD-MMM-YYYY HH:mm:ss');
    }

}

export const dateFakerCategory: FakerCategory[] = [
    {
        category: 'Date - Anytime just date',
        desc: 'Date - Anytime just date',
        defaultFieldName: 'Date',
        methodName: 'anytimeJustDate',
        class: DateFacade
    },
    {
        category: 'Date - Anytime in DD-MMM-YYYY HH:mm:ss',
        desc: 'Date - Anytime in DD-MMM-YYYY HH:mm:ss',
        defaultFieldName: 'Date',
        methodName: 'anytime',
        class: DateFacade
    },{
        category: 'Date - within last 10 years in DD-MMM-YYYY HH:mm:ss',
        desc: 'Date - within last 10 years in DD-MMM-YYYY HH:mm:ss',
        defaultFieldName: 'Date',
        methodName: 'last10years',
        class: DateFacade
    },
    {
        category: 'Date - within last 100 years in DD-MMM-YYYY HH:mm:ss',
        desc: 'Date -within last 100 years in DD-MMM-YYYY HH:mm:ss',
        defaultFieldName: 'Date',
        methodName: 'last100years',
        class: DateFacade
    },{
        category: 'Date - in next 10 years in DD-MMM-YYYY HH:mm:ss',
        desc: 'Date - in next 10 years in DD-MMM-YYYY HH:mm:ss',
        defaultFieldName: 'Date',
        methodName: 'next10years',
        class: DateFacade
    },
    {
        category: 'Date - in next 100 years in DD-MMM-YYYY HH:mm:ss',
        desc: 'Date - in next 100 years in DD-MMM-YYYY HH:mm:ss',
        defaultFieldName: 'Date',
        methodName: 'next100years',
        class: DateFacade
    }
]