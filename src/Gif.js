import React, { Component } from 'react';
import './Gif.css';

class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            src: props.src,
            alt: props.alt,
            width: 0,
            height: 0,
            show: false
        }

        this.srcImage = new Image();
        this.srcImage.addEventListener('load', this.onLoad.bind(this), false);
        this.srcImage.src = props.src;

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);

    }

    onLoad(e){

        const srcCanvas = this.refs.canvas;
        srcCanvas.width = e.path[0].naturalWidth;
        srcCanvas.height = e.path[0].naturalHeight;

        const srcCanvasContext = srcCanvas.getContext('2d');
        srcCanvasContext.drawImage(this.srcImage, 0,0);

        this.setState({
            width: e.path[0].naturalWidth,
            height: e.path[0].naturalHeight
        });

    }

    onMouseEnter(){
        this.setState({ 'show': true });
    }

    onMouseOut(){
        this.setState({ 'show': false });        
    }

    render() {

        let gif;

        const style = {
            width: this.state.width,
            height: this.state.height
        }

        if (this.state.show===true) {
            gif = <img src={this.state.src} alt={this.state.alt} />;
        } else {
            gif = null;
        }

        return (
            <div className="Gif" style={ style } onMouseEnter={ this.onMouseEnter } onMouseOut={ this.onMouseOut }>
                { gif }
                <canvas ref="canvas" />
            </div>
        );
    }
}

export default App;
