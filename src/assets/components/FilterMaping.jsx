
const FilterMaping = () => {

    const products = [
        { name: 'Product A', price: 80 },
        { name: 'Product B', price: 120 },
        { name: 'Product C', price: 95 }
    ];

    const expensiveProducts = products
        .filter((products) => products.price > 100)
        .map((products) => products.name);

    console.log(expensiveProducts);


    return (
        <div>
            <h2>Filtering and Maping</h2>
        </div>
    )
}

export default FilterMaping;
