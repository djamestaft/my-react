import React, {Component} from 'react';
import classes from './Jockey.css';
import ProgressBar from 'react-progressbar';

export class Jockey extends Component {
    state = {
        interval: Math.floor(Math.random() * 100) + 50,
        progress: 0,
        name: this.props.name
    }

    componentDidMount = () => {
        setInterval( this.timer, this.state.interval ) 
    }

    timer = () => {
        const { callback } = this.props;
        if (this.state.progress !== 100) {
            this.setState({ progress: this.state.progress + 1 });
        } else {
            if (callback)
                callback(this.state.progress, this.state.name);
        }
    } 
        
    render() {
        return ( 
            <div>
                <div className= "Jockey" >
                    <img src={ this.props.avatar } alt="The Jockey" />
                    <ProgressBar completed={ this.state.progress } color={ this.props.color } height={ 100 }/>
                    <h5>{this.state.name}</h5>
                </div>
            </div>
        );
    }
}