import '../css/extractObjectProperty.css';

const ExtractObjProperties = () => {

    const people = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 }
    ];

    const names = people.map((people) => people.name)

    console.log(names);

    return (
        <div>

        </div >
    )
}

export default ExtractObjProperties

