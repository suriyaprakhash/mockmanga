import { faker } from "@faker-js/faker";
import { FakerFacade } from "./FakerFacade";
import { FakerCategory } from "../FakerCategory";

export class System extends FakerFacade {

    public static cron(): string {
        return faker.system.cron();
    }

    public static fileName(): string {
        return faker.system.fileName();
    }

    public static filePath(): string {
        return faker.system.filePath();
    }

    public static fileType(): string {
        return faker.system.fileType();
    }
    
    public static mimeType(): string {
        return faker.system.mimeType();
    }


}

export const systemFakerCategory: FakerCategory[] = [
    {
        category: 'System - Cron',
        desc: 'Cron',
        defaultFieldName: 'Cron',
        methodName: 'cron',
        class: System
    },
    {
        category: 'System - File Name',
        desc: 'File Name',
        defaultFieldName: 'File Name',
        methodName: 'fileName',
        class: System
    },
    {
        category: 'System - File Path',
        desc: 'File Path',
        defaultFieldName: 'File Path',
        methodName: 'filePath',
        class: System
    },
    {
        category: 'System - File Type',
        desc: 'File Type',
        defaultFieldName: 'File Type',
        methodName: 'fileType',
        class: System
    },
    {
        category: 'System - Mime Type',
        desc: 'Mime Type',
        defaultFieldName: 'Mime Type',
        methodName: 'mimeType',
        class: System
    }
]