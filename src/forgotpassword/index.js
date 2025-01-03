import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router

const ForgotPassword = () => {
    const [username, setUsername] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !mobile) {
            setError('Please enter both username and mobile');
            return;
        }

        // If both fields are filled, reset error and show success dialog
        setError('');
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false); // Hide success dialog after 3 seconds
        }, 3000);
    };

    return (
        <div>
            {success && (
                <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>
                    Sent Successfully!
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Mobile:</label>
                    <input
                        type="text"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>

            <div>
                {/* Use Link from React Router for navigation */}
                <Link to="/login" style={{ textDecoration: 'none', color: 'blue', marginTop: '10px', display: 'block' }}>
                    Back to Login
                </Link>
            </div>
        </div>
    );
};

export default ForgotPassword;
