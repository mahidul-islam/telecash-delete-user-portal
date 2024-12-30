import React, { useState } from 'react';

const InputField = () => {
    const [showToast, setShowToast] = useState(false);
    const [name, setName] = useState('');

    const clickHandler = (e) => {
        e.preventDefault();
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Delete Wallet Request</h2>
                <form onSubmit={clickHandler}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="delete-btn">
                        Request to delete this wallet
                    </button>
                </form>
            </div>

            {showToast && (
                <div className="toast">
                    <p>Your request is processing. We will delete your data within 90 days.</p>
                    <button className="close-btn" onClick={() => setShowToast(false)}>✕</button>
                </div>
            )}

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #f5f5f5;
                    padding: 20px;
                }

                .card {
                    background: white;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    max-width: 400px;
                }

                h2 {
                    text-align: center;
                    margin-bottom: 1.5rem;
                    color: #333;
                    font-size: 1.5rem;
                    font-weight: bold;
                }

                .input-group {
                    margin-bottom: 1rem;
                }

                input {
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-size: 1rem;
                    outline: none;
                    transition: border-color 0.2s;
                }

                input:focus {
                    border-color: #dc2626;
                    box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.1);
                }

                .delete-btn {
                    width: 100%;
                    padding: 0.75rem;
                    background-color: #dc2626;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }

                .delete-btn:hover {
                    background-color: #b91c1c;
                }

                .toast {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background-color: #1f2937;
                    color: white;
                    padding: 1rem;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    max-width: 400px;
                    animation: slideIn 0.3s ease-out;
                }

                .close-btn {
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    padding: 0 0.5rem;
                    margin-left: 1rem;
                    font-size: 1.2rem;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                }

                .close-btn:hover {
                    opacity: 1;
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(1rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default InputField;