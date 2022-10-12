export let products = [
    {
        ref: 'REF1',
        price: 250,
        description: "Lorem ipsum dolor bore et dolore magna aliqua",
    },
    {
        ref: 'REF2',
        price: 140,
        description: "lorem34"
    },
    {
        ref: 'REF3',
        price: 490,
        description: "lorem friuhizoejf iojrifj"
    }
];

export function search(keywords) {
    return products.filter(p => p.ref.toLocaleLowerCase() === keywords.toLocaleLowerCase() || p.description.toLocaleLowerCase() === keywords.toLocaleLowerCase());
}