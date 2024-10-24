import 'bootstrap/dist/css/bootstrap.min.css';

const RenderingListItems = () => {

    const products = [
        { name: 'Product A', price: 80 },
        { name: 'Product B', price: 120 },
        { name: 'Product C', price: 95 }
    ];

    return (
        <div className="container mt-5">
            <ul className='list-group'>
                {products.map(({ name, price }) => (
                    <li key={name} className="mb-2 list-group-item">
                        <span className="me-1">Name : </span> <b className='me-3'> {name}</b>
                        <span className="me-1">Price : </span> <b> {price}</b>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default RenderingListItems;
