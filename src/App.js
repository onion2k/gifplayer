import React, { Component } from 'react';
import './App.css';

import Gif from './Gif.js';
import lipgloss from './lipgloss.gif';
import smoke from './smoke.gif';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Gif src={lipgloss} alt='Lipgloss' style={{ width: 200 }}></Gif>
                <Gif src={smoke} alt='Smoke'></Gif>
            </div>
        );
    }
}

export default App;
