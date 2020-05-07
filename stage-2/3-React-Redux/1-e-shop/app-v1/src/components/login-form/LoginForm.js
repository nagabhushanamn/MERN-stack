import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { login } from '../../actions/user'

const LoginForm = ({ history }) => {
    const [username, setUsername] = useState('user1')
    const [password, setPassword] = useState('password')
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(username, password))
        history.push('/items')
    }
    return (
        <div className="row">
            <div className="col-6">
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
            </div>
        </div>
    );
};

export default LoginForm;