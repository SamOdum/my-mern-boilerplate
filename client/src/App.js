import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
	state = {
		count: 0,
	};

	handleClickPlus = () => {
		this.setState({ count: this.state.count + 1 });
	};

	handleClickMinus = () => {
		const currentCount =
			this.state.count !== 0 ? this.state.count - 1 : (this.state.count = 0);
		this.setState({
			count: currentCount,
		});
	};

	render() {
		return (
			<div>
				<h1>Hello World</h1>
				<h2>Count: {this.state.count}</h2>
				<button onClick={this.handleClickPlus}>+</button>
				<button onClick={this.handleClickMinus}>-</button>
			</div>
		);
	}
}

export default hot(module)(App);
