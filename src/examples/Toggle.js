import React from "react";

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick} className={this.state.isToggleOn ? "mt-4 btn btn-success" : "mt-4 btn btn-danger"}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}