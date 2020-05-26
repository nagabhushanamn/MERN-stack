


export function loadItems(type, size) {
    //.....
    let items = [
        { id: 1, name: 'Laptop', price: 100000, currency: 'INR', canBuy: true, description: 'New Mac pro', image: 'images/Laptop.png' },
        { id: 2, name: 'Mobile', price: 10000, currency: 'INR', canBuy: true, description: 'New iphone', image: 'images/Mobile.png' }
    ]
    return { type: 'LOAD_ITEMS', items }
}