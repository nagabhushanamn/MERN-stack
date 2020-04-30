import React, { Component } from 'react';

import { withCard } from './index.js'

class Comp2 extends Component {
    render() {
        return (
            <span style={{ color: 'green' }}>Comp2</span>
        );
    }
}

export default withCard(Comp2);