import { Category } from "./category.enum";

export class ProductModel implements Product {
    name!: string;
    description!: string;
    price!: number
    category!: Category;
    isAvailable!: boolean;
    colors: String[] = ['Graphite', 'Pacific Blue', 'Silver', 'Gold'];
    memory: Array<Number> = [128, 256, 512];
}

export interface Product {
    name: string;
    description: string;
    price: number
    category: Category;
    isAvailable: boolean;
    colors: String[];
    memory: Number[];
}
