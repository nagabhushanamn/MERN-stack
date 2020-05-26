import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

const LoginForm = ({ history }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const doAuth = () => {
        // Fake Auth
        if (username === "admin" && password === "password") {
            
            const userDet = {
                name: "Nag",
                email: 'nagabhushanamn@gmail.com',
                address: 'universe'
            }
            
            dispatch({ type: 'LOGIN', userDet })

            history.push('dashboard')
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        doAuth()
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