import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if (onSubmit) {
            onSubmit({ username, password })
        }

    }
    return (
        <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="form-group">
                        <label>UserName:</label>
                        <input value={username} onChange={e => setUsername(e.target.value)} className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" type="password" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;