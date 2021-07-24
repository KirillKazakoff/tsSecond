import IBuyable from '../interfaces/IBuyable';

export default class Cart {
    private items: IBuyable[] =[];

    add(item: IBuyable): void {
        this.items.push(item);
    }

    getAll(): IBuyable[] {
        return [...this.items];
    }

    getCost(): number {
        return this.items.reduce((total, element) => (
            total + element.price), 0);
    }

    getDiscountCost(discount: number): number {
        const cost = this.getCost();

        return cost * (1 - discount);
    }

    productDelete(id: number): boolean|string {
        const productIndex = this.items.findIndex((element) => element.id === id);

        if (productIndex > -1) {
            this.items.splice(productIndex, 1);
            return true;
        }
        return 'there is no element with this id';
    }
}
