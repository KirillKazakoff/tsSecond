import Cart from '../ts/classes/cart';
import IBuyable from '../ts/interfaces/IBuyable';

const first = {
    id: 1,
    name: 'kust',
    price: 100,
};
const second = {
    id: 2,
    name: 'kust',
    price: 100,
};
const cart = new Cart();

cart.add(first);
cart.add(second);

test('getCostFuncs check', () => {
    const expected = 140;
    const result = cart.getDiscountCost(0.3);

    expect(result).toBe(expected);
});

test('productDelete success', () => {
    const expected: IBuyable[] = [
        {
            id: 2,
            name: 'kust',
            price: 100,
        },
    ];

    cart.productDelete(1);
    const result = cart.getAll();
    expect(result).toEqual(expected);
});

test('productDelete fail', () => {
    const result = cart.productDelete(0);
    const expected = 'there is no element with this id';

    expect(result).toEqual(expected);
});
