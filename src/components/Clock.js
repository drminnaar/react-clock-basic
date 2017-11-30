import React, { Component } from 'react';
import Display from './Display';
import Panel from './Panel';

class Clock extends Component {

    constructor() {
        super();
        
        this.state = {
            date: new Date(),
            isDateVisible: true
        };
        
        this.toggleDate = this.toggleDate.bind(this);
    }

    componentDidMount() {
        this.startTime();
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    startTime() {        
        this.timer = setInterval(() => {
            this.setState(() => ({ date: new Date()}));
        }, 1000);
    }   
    
    toggleDate() {
        this.setState((prevState) => ({ isDateVisible: !prevState.isDateVisible}));
    }

    render() {
        return (
            <div>
                <Panel toggleDate={this.toggleDate} dateOn={this.state.isDateVisible} />
                <Display date={this.state.date} isDateVisible={this.state.isDateVisible} />
            </div>
        );
    }
}

export default Clock;