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
        this.handleCsv(selectedCategories, parameters);
    }

    private handleCsv(selectedCategories: SelectedCategory[], parameters: Parameters) {
        const allItems: string[] = [];
        const headers: (string | undefined)[] = [];
        selectedCategories.forEach(selectedCategory => {
            headers.push('"' + selectedCategory.userColumnName + '"')
        });
        allItems.push(headers!.join(','));
        for (let i = 0; i < parameters.count; i++) {
            allItems.push(this.makeCsv(selectedCategories));
        }
        console.log(allItems);
        writeStringArrayToCsv(allItems);
    }

    private makeCsv(selectedCategories: SelectedCategory[]): string {
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
        return lineItems.join(',');
    }

}




