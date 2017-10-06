import React, { Component } from 'react';
import './Gif.css';

class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            style: props.style,
            src: props.src,
            alt: props.alt,
            width: 0,
            height: 0,
            show: false
        }

        this.srcImage = new Image();
        this.srcImage.addEventListener('load', this.onLoad.bind(this), false);
        this.srcImage.width = props.style ? props.style.width : 0;
        this.srcImage.height = props.style ? props.style.height : 0;
        this.srcImage.src = props.src;

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);

    }

    onLoad(e){

        const srcCanvas = this.refs.canvas;

        const naturalWidth = e.path[0].naturalWidth;
        const naturalHeight = e.path[0].naturalHeight;
        const aspect = (naturalHeight/naturalWidth);

        if (e.path[0].width===0 && e.path[0].height===0) {
            srcCanvas.width = naturalWidth;
            srcCanvas.height = naturalHeight;
        } else if (e.path[0].width!==0 && e.path[0].height===0) {
            srcCanvas.width = e.path[0].width;
            srcCanvas.height = e.path[0].width * aspect;
        } else if (e.path[0].width===0 && e.path[0].height!==0) {
            srcCanvas.width = e.path[0].height * aspect;
            srcCanvas.height = e.path[0].height;
        } else {
            srcCanvas.width = e.path[0].width;
            srcCanvas.height = e.path[0].height;
        }

        const srcCanvasContext = srcCanvas.getContext('2d');
        srcCanvasContext.drawImage(this.srcImage, 0, 0, srcCanvas.width, srcCanvas.height);

        this.setState({
            width: srcCanvas.width,
            height: srcCanvas.height
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

        const style = Object.assign({ 'overflow': 'hidden' }, {
            width: this.state.width,
            height: this.state.height
        }, this.state.style);

        if (this.state.show===true) {
            gif = <img src={this.state.src} alt={this.state.alt} style={ style } />;
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
