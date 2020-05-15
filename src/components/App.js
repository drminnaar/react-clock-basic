import React, { Component } from 'react';
import Clock from './Clock';
import Header from './Header';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            title: 'React Clock'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />
                <Clock />
            </div>
        );
    }
}
