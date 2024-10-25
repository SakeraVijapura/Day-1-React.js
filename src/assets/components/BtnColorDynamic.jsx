import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Btn = () => {

    const [selectedColor, setSelectedColor] = useState('');

    const colors = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
    ];

    function handleAlert(item) {
        setSelectedColor(item);
    }

    return (
        <div className="container">
            <div className="d-flex gap-4 mt-5">
                {colors.map((item) => {
                    return (
                        <button
                            key={item}
                            type="button"
                            className={"btn btn-" + item}
                            onClick={() => handleAlert(item)}
                        >
                            {item.charAt(0).toUpperCase() + item.substring(1)}
                        </button>
                    );
                })
                }
            </div>

            <div>
                {selectedColor ? (
                    <div className={"alert mt-4 alert-" + selectedColor} role="alert">
                        You clicked on {selectedColor} button!
                    </div>
                ) : null}
            </div>

        </div >
    )
}

export default Btn;
