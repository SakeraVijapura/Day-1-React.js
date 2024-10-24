import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const BtnColorDynamic = () => {
    const BtnClasses = [
        { className: 'btn-primary', label: 'Primary' },
        { className: 'btn-secondary', label: 'Secondary' },
        { className: 'btn-success', label: 'Success' },
        { className: 'btn-danger', label: 'Danger' },
        { className: 'btn-warning', label: 'Warning' },
        { className: 'btn-info', label: 'Info' },
        { className: 'btn-light', label: 'Light' },
        { className: 'btn-dark', label: 'Dark' }
    ];

    const [isAlertMsg, setIsAlertMsg] = useState('');

    const handleClick = (label) => {
        setIsAlertMsg(`You clicked ${label} button!`);

    }

    console.log(isAlertMsg);

    return (
        <div className='container mt-5'>
            <div className="mb-4">
                {BtnClasses.map(({ className, label }) => (
                    <button
                        key={className}
                        type="button"
                        onClick={() => handleClick(label)}
                        className={`btn ${className} me-3`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {isAlertMsg && (
                <div className={`alert alert-info`}>{isAlertMsg}</div>
            )

            }

        </div >
    )
}

export default BtnColorDynamic
