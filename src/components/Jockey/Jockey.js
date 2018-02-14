import React, {Component} from 'react';
import classes from './Jockey.css';
import ProgressBar from 'react-progressbar';

export class Jockey extends Component {
    
    state = {
        interval: Math.floor(Math.random() * 100) + 50,
        progress: 1,
        finished: false
    }

    timer = () => {
        this.setState({ progress: this.state.progress + 10 });
        console.log("hello");
        (this.state.progress >= 99) ? this.setState({ progress: 100 }) : "" ;
    } 
    
    componentDidMount = () => {
        this.state.interval = setInterval(this.timer, this.state.interval);
    }

    checkStatus = () => {
        (this.state.progress == 100) ? this.setState({ finished: true }) : "";
        console.log("status: ", this.state.finished);
    }
    
    render() {
        return ( 
            <div>
                <div className= "Jockey" >
                    <img src={ this.props.avatar } alt="The Jockey" />
                    <ProgressBar completed={ this.state.progress } color={ this.props.color } height={ 100 }/>
                </div>
            </div>
        );
    }
}