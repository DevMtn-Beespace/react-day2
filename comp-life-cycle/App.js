import React from "react";
import Child from "./Child.js";

export default React.createClass({
	getInitialState() {
		return {
			visible: true
		}
	},
	componentWillMount() {
		console.log("Parent will mount");
	},
	componentDidMount() {
		console.log("Parent did Mount");
	},
	render() {
		return (
			<div ref = {ref => this.test = ref}>
			<input onChange={(e) => this.setState({name: e.target.value})}/>
			<button onClick={this.onOff}>Show/Hide Child</button>
			{this.state.visible ? <Child name={this.state.name}/> : null}
			</div>
		)
	},
	onOff() {
		this.setState({
			visible: !this.state.visible
		})
	}
})
