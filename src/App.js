import React, { Component } from 'react';
import './App.css';

import Gif from './Gif.js';
import image from './smoke.gif';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Gif src={image} alt='Test gif'></Gif>
            </div>
        );
    }
}

export default App;
