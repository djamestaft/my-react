import React, {Component} from 'react';
import classes from './Jockey.css';
import Progress from 'react-progressbar';

export class Jockey extends Component {
    
    state = {
        interval: Math.floor(Math.random() * 1000),
        progress: 0
    }

    timer = () => {
        this.setState({ progress: this.state.progress + 1 });
        (this.state.progress >= 99) ? this.setState({ progress: 100 }) : "" ;
    }

    componentDidMount = () => {
        this.interval = setInterval(this.timer, this.state.interval);
    }

    render() {
        return ( 
            <div className="Jockey">
                <img src={ this.props.avatar } alt="The Jockey" />
                <Progress completed={ this.state.progress } color={this.props.color}/>
            </div>
        );
    }
}