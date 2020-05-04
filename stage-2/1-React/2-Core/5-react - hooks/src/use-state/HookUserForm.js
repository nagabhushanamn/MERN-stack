import React, { useState } from 'react';

const HookUserForm = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '', })
    return (
        <div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input value={user.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })} id="first_name" type="text" className="validate" />
                            <label for="first_name">First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input value={user.lastName} onChange={e => setUser({ ...user, lastName: e.target.value })} id="last_name" type="text" className="validate" />
                            <label for="last_name">Last Name</label>
                        </div>
                        <br />
                        <pre>
                            {JSON.stringify(user)}
                        </pre>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default HookUserForm;
