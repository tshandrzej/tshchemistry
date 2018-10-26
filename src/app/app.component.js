import React, { Component } from 'react';

import './app.css';

class AppComponent extends Component {
    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}

export default AppComponent;