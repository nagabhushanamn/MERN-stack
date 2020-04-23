import React from 'react';
import ReactClock from './ReactClock'

function App() {
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <div id="clock-4">
                        <ReactClock timeZone='Asia/Kolkata' />
                    </div>
                </div>
                <div className="col-4">
                    <div id="clock-5">
                        <ReactClock timeZone='Asia/Dubai' />
                    </div>
                </div>
                <div className="col-4">
                    <div id="clock-6">
                        <ReactClock timeZone='America/New_York' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App