import { ProductType } from "../api/products/route";

export function productFilter(product: ProductType, filter: string) {
    if (product.name.toLowerCase().includes(filter)) {
        return true;
    }

    if (product.model.toLowerCase().includes(filter)) {
        return true;
    }

    if (product.cars.some(car => car.toLowerCase().includes(filter))) {
        return true;
    }

    const searchTerms = filter.split(' ');
    return searchTerms.every(term =>
        product.name.toLowerCase().includes(term) ||
        product.model.toLowerCase().includes(term) ||
        product.cars.some(car => car.toLowerCase().includes(term))
    );
}