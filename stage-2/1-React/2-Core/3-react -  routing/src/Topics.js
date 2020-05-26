import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Topic from './Topic'


class Topics extends Component {
    render() {
        let { match, history } = this.props
        let { path } = match
        return (
            <div>
                <h2>Topics</h2>
                <hr />
                <div className="row">
                    <div className="col-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link" to={`${path}/mongo`}>Mongo</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${path}/express`}>Express.js</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${path}/react`}>React.js</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`${path}/node`}>Node.js</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-9">
                        <hr />
                        <Route exact path={path} render={() => <span>please select any topic</span>} />
                        <Route path={`${path}/:course`} render={(props) => <Topic {...props} />} />
                        <hr />
                        <button onClick={e => history.goBack()} className="btn btn-primary">go back</button>
                        &nbsp;
                        <button onClick={e => history.push("/")} className="btn btn-primary">go home</button>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default Topics;