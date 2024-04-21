import { faker } from "@faker-js/faker";
import { FakerCategory } from "../FakerCategory";
import { FakerFacade } from "./FakerFacade";
import { Phone } from "./PhoneFacade";

export class Job extends FakerFacade {

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

export const jobFakerCategory: FakerCategory[] = [
    {
        category: 'Person -  Job Title',
        desc: 'jobTitle',
        defaultFieldName: 'Job title',
        methodName: 'jobTitle',
        class: Job
    },
    {
        category: 'Person -  Job Description',
        desc: 'jobDescriptor',
        defaultFieldName: 'Job description',
        methodName: 'jobDescriptor',
        class: Job
    },
    {
        category: 'Person -  Job Area',
        desc: 'jobArea',
        defaultFieldName: 'Job area',
        methodName: 'jobArea',
        class: Job
    },
    {
        category: 'Person - Job Type',
        desc: 'jobType',
        defaultFieldName: 'Job type',
        methodName: 'jobType',
        class: Job
    }
]