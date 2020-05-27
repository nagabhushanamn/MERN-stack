

import React, { useState } from 'react';

import * as userApi from '../api/user'

const Register = ({ history }) => {
    let [user, setUser] = useState({})
    const handleChangeEvent = (e, field) => {
        let fieldValue = e.target.value
        setUser({ ...user, [field]: fieldValue })
    }
    const handleSubmitEvent = e => {
        e.preventDefault()
        userApi.doSave(user)
            .then(response => response.data)
            .then(user => {
                history.push('/login')
            })
    }
    return (
        <div className="row">
            <div className="col-6">
                <div className="card">
                    <div className="card-header">Register</div>
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
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" onChange={e => handleChangeEvent(e, 'name')} />
                            </div>
                            <div className="form-group">
                                <label>Mobile</label>
                                <input className="form-control" onChange={e => handleChangeEvent(e, 'mobile')} />
                            </div>
                            <div className="form-group">
                                <label>DOB</label>
                                <input className="form-control" onChange={e => handleChangeEvent(e, 'dob')} />
                            </div>
                            <div className="form-group">
                                <label>Gender</label> <br />
                                <input type="radio" value="male" onChange={e => handleChangeEvent(e, 'gender')} /> Male &nbsp;
                                <input type="radio" value="female" onChange={e => handleChangeEvent(e, 'gender')} /> Female
                            </div>
                            <button className="btn btn-primary">sign-up</button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Register;