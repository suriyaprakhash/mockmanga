import { faker } from "@faker-js/faker";
import { FakerFacade } from "./FakerFacade";
import { FakerCategory } from "../FakerCategory";

export class Vehicle extends FakerFacade {

    public static vehicleName(): string {
        return faker.vehicle.vehicle();
    }

    public static model(): string {
        return faker.vehicle.model();
    }

    public static vin(): string {
        return faker.vehicle.vin();
    }

    public static color(): string {
        return faker.vehicle.color();
    }

    public static manufacturer(): string {
        return faker.vehicle.manufacturer();
    }

    public static fuel(): string {
        return faker.vehicle.fuel();
    }


}

export const vehicleFakerCategory: FakerCategory[] = [
    {
        category: 'Vehicle - Vehicle Name',
        desc: 'Vehicle Name',
        defaultFieldName: 'Vehicle Name',
        methodName: 'vehicleName',
        class: Vehicle
    }, {
        category: 'Vehicle - Model',
        desc: 'Model',
        defaultFieldName: 'Model',
        methodName: 'model',
        class: Vehicle
    }, {
        category: 'Vehicle - Vin',
        desc: 'Vin',
        defaultFieldName: 'Vin',
        methodName: 'vin',
        class: Vehicle
    }, {
        category: 'Vehicle - Color',
        desc: 'Color',
        defaultFieldName: 'Color',
        methodName: 'color',
        class: Vehicle
    }, {
        category: 'Vehicle - Manufacturer',
        desc: 'Manufacturer',
        defaultFieldName: 'Manufacturer',
        methodName: 'manufacturer',
        class: Vehicle
    }, {
        category: 'Vehicle - Fuel',
        desc: 'Fuel',
        defaultFieldName: 'Fuel',
        methodName: 'fuel',
        class: Vehicle
    },
]