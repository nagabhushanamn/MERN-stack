import React, { Component } from 'react';

import { withCard, withBackground } from './index.js'

class Comp1 extends Component {
    render() {
        return (
            <span style={{ color: 'red' }}>Comp1</span>
        );
    }
}

export default withBackground(withCard(Comp1));