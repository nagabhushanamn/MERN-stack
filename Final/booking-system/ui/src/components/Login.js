

import React, { useState } from 'react';
import * as userApi from '../api/user'

const Login = ({ history }) => {
    let [credentials, setCredentials] = useState({})
    const handleChangeEvent = (e, field) => {
        let fieldValue = e.target.value
        setCredentials({ ...credentials, [field]: fieldValue })
    }
    const handleSubmitEvent = e => {
        e.preventDefault()
        userApi.doLogin(credentials)
            .then(response => response.data)
            .then(data => {
                let { token } = data
                sessionStorage.setItem('authToken', token)
                history.push('/home')
            })
    }
    return (
        <div className="row">
            <div className="col-6">
                <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                        <form onSubmit={e => handleSubmitEvent(e)}>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" onChange={e => handleChangeEvent(e, 'email')} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" onChange={e => handleChangeEvent(e, 'password')} />
                            </div>
                            <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;