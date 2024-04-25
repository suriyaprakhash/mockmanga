import { faker } from "@faker-js/faker";
import { FakerFacade } from "./FakerFacade";
import { FakerCategory } from "../FakerCategory";

export class Finance extends FakerFacade {

    public static accountName(): string {
        return faker.finance.accountName();
    }

    public static accountNumber(): string {
        return faker.finance.accountNumber();
    }

    public static creditCardNumber(): string {
        return faker.finance.creditCardNumber();
    }

    public static creditCardIssuer(): string {
        return faker.finance.creditCardIssuer();
    }

    public static pin(): string {
        return faker.finance.pin();
    }

    public static currencyName(): string {
        return faker.finance.currency().name;
    }

    public static routingNumber(): string {
        return faker.finance.routingNumber();
    }

    public static transactionType(): string {
        return faker.finance.transactionType();
    }

    public static transactionDescription(): string {
        return faker.finance.transactionDescription();
    }

}

export const financeFakerCategory: FakerCategory[] = [
    {
        category: 'Finance - Account Name',
        desc: 'Account Name',
        defaultFieldName: 'Account Name',
        methodName: 'accountName',
        class: Finance
    },
    {
        category: 'Finance - Account Number',
        desc: 'Account Number',
        defaultFieldName: 'Account Number',
        methodName: 'accountNumber',
        class: Finance
    }, {
        category: 'Finance - Credit card number',
        desc: 'Credit card number',
        defaultFieldName: 'Credit card number',
        methodName: 'creditCardNumber',
        class: Finance
    }, {
        category: 'Finance - Credit card issuer',
        desc: 'Credit card issuer',
        defaultFieldName: 'Credit card issuer',
        methodName: 'creditCardIssuer',
        class: Finance
    },  {
        category: 'Finance - Pin',
        desc: 'Pin',
        defaultFieldName: 'Pin',
        methodName: 'pin',
        class: Finance
    },
    {
        category: 'Finance - Currency name',
        desc: 'Currency name',
        defaultFieldName: 'Currency name',
        methodName: 'currencyName',
        class: Finance
    },{
        category: 'Finance - Routing number',
        desc: 'Routing number',
        defaultFieldName: 'CRouting number',
        methodName: 'routingNumber',
        class: Finance
    },{
        category: 'Finance - Transaction Type',
        desc: 'Transaction Type',
        defaultFieldName: 'Transaction Type',
        methodName: 'transactionType',
        class: Finance
    },{
        category: 'Finance - Transaction Description',
        desc: 'Transaction Description',
        defaultFieldName: 'Transaction Description',
        methodName: 'transactionDescription',
        class: Finance
    },
]