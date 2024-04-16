import { SelectedCategory } from "../hero";
import { FakerCategory, availableFakerCategories } from "./FakerCategory";
import { Parameters } from "./Parameters";
import { writeStringArrayToCsv } from "./writers/csvWriter";

export class Generator {

    private availableCategoriesMap: Map<string, FakerCategory> = new Map();

    constructor() {
        availableFakerCategories.forEach(fakerCategory =>
            this.availableCategoriesMap.set(fakerCategory.category, fakerCategory));
    }

    public generate(parameters: Parameters, selectedCategories: SelectedCategory[]) {
        if (parameters.type === 'json') {
            this.handleJson(selectedCategories, parameters);
        } else {
            this.handleCsv(selectedCategories, parameters);
        }
    }
    
    private handleJson(selectedCategories: SelectedCategory[], parameters: Parameters) {
        const allItems: string[] = [];
        const headers: (string | undefined)[] = [];
        allItems.push('[');
        // selectedCategories.forEach(selectedCategory => {
        //     headers.push('"' + selectedCategory.userColumnName + '"')
        // });
        for (let i = 0; i < parameters.count; i++) {
            allItems.push('{');
            for (let j = 0; j < selectedCategories.length; j++) {
                const items: string[] = this.buildData(selectedCategories);
                allItems.push('"' + selectedCategories[j].userColumnName + '"' + ' : ' + items[j]);
                console.log('"' + selectedCategories[j].userColumnName + '"' + ' : ' + items[j]);
                if (j + 1 < selectedCategories.length) {
                    allItems.push(',');
                }
            }
            allItems.push('}');
            if (i + 1 < parameters.count) {
                allItems.push(',');
            }
        }
        allItems.push(']');
        console.log(allItems);
        writeStringArrayToCsv(allItems, 'json');
    }


    private handleCsv(selectedCategories: SelectedCategory[], parameters: Parameters) {
        const allItems: string[] = [];
        const headers: (string | undefined)[] = [];
        selectedCategories.forEach(selectedCategory => {
            headers.push('"' + selectedCategory.userColumnName + '"')
        });
        allItems.push(headers!.join(','));
        for (let i = 0; i < parameters.count; i++) {
            allItems.push(this.buildData(selectedCategories).join(','));
        }
        console.log(allItems);
        writeStringArrayToCsv(allItems, 'csv');
    }

    private buildData(selectedCategories: SelectedCategory[]): string[] {
        const lineItems: string[] = [];
        selectedCategories.forEach(selectedCategory => {
            const availableFakerCategory: FakerCategory | undefined = this.availableCategoriesMap.get(selectedCategory.name);

            const method = (availableFakerCategory?.class as any)[availableFakerCategory?.methodName!]; // Type assertion to bypass type safety
            if (typeof method === "function") {
                lineItems.push('"'+ method() + '"'); // Call the method with argument
            } else {
              console.error(`"${availableFakerCategory?.methodName!}" is not a method of ${availableFakerCategory?.class}`);
            }
        })
        return lineItems;
    }

}




