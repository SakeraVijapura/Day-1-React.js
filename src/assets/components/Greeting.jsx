import '../css/greeting.css';

const Greeting = () => {
    let isLogged = true;
    return (
        <div className='main'>
            <h2>{isLogged ? 'Welcome to React' : 'Please login to further process'}</h2>
        </div>
    )
}

export default Greeting;

