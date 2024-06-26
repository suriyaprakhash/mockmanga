import CategoryBar, { Category } from "../categoryBar";
import { FakerCategory, availableFakerCategories } from "./FakerCategory";
import { Parameters } from "./Parameters";
import { writeStringArray } from "./writers/fileWriter";
import { downloadArrayToFile } from "./writers/largeFileWriter";

export class Generator {

    private availableCategoriesMap: Map<string, FakerCategory> = new Map();

    constructor() {
        availableFakerCategories.forEach(fakerCategory =>
            this.availableCategoriesMap.set(fakerCategory.category, fakerCategory));
    }

    public  generate(parameters: Parameters, selectedCategories: Category[]): Promise<boolean> {
        if (parameters.type === 'json') {
            return new Promise(resolve => resolve(this.handleJson(selectedCategories, parameters)))
        } else {
            return new Promise(resolve => resolve(this.handleCsv(selectedCategories, parameters)))
        }
    }

    private handleJson(selectedCategories: Category[], parameters: Parameters) {
        const indendSpace = ' ';
        const indendSpace2 = '  ';
        const semiColon = ':';
        const comma = ',';
        const allItems: string[] = [];
        const headers: (string | undefined)[] = [];
        allItems.push('[');
        for (let i = 0; i < parameters.count; i++) {
            allItems.push(indendSpace + '{');
            for (let j = 0; j < selectedCategories.length; j++) {
                const data: string[] = this.buildData(selectedCategories);
                const item = indendSpace2 + '"' + selectedCategories[j].defaultFieldName + '"' + semiColon + indendSpace + data[j];
                // allItems.push();

                if (j + 1 < selectedCategories.length) {
                    allItems.push(item + comma);
                } else {
                    allItems.push(item);
                }
            }
            allItems.push(indendSpace + '}');

            if (i + 1 < parameters.count) {
                allItems.push(indendSpace + comma);
            }
        }
        allItems.push(']');
        // writeStringArray(allItems, 'json');
        return downloadArrayToFile(allItems, 'json');
    }


    private handleCsv(selectedCategories: Category[], parameters: Parameters) {
        const allItems: string[] = [];
        const headers: (string | undefined)[] = [];
        selectedCategories.forEach(selectedCategory => {
            headers.push('"' + selectedCategory.defaultFieldName + '"')
        });
        allItems.push(headers!.join(','));
        for (let i = 0; i < parameters.count; i++) {
            allItems.push(this.buildData(selectedCategories).join(','));
        }
        // writeStringArray(allItems, 'csv');
        return downloadArrayToFile(allItems, 'csv');
    }

    private buildData(selectedCategories: Category[]): string[] {
        const lineItems: string[] = [];
        selectedCategories.forEach(selectedCategory => {
            const availableFakerCategory: FakerCategory | undefined = this.availableCategoriesMap.get(selectedCategory.name);

            const method = (availableFakerCategory?.class as any)[availableFakerCategory?.methodName!]; // Type assertion to bypass type safety
            if (typeof method === "function") {
                if (availableFakerCategory?.type == 'number') {
                    lineItems.push(parseInt(method(), 10) + '')
                } else {
                    lineItems.push('"' + method() + '"'); // Call the method with argument
                }
            } else {
                console.error(`"${availableFakerCategory?.methodName!}" is not a method of ${availableFakerCategory?.class}`);
            }
        })
        return lineItems;
    }

}




