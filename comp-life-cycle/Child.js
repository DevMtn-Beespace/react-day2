import React from "react";

export default React.createClass({
	componentWillMount (){
		console.log(" will mount -child")
	},
	componentDidMount (){
		console.log("did mount - parent");
	},
	componentWillUnmount() {
		console.log("will unmount - child");
	},
	compnenetWillReceiveProps(nextProps) {
		console.log("nextprops", nextProps);
		console.log("this.props", this.props);
	},
	shouldComponentUpdate(nextprops) {
		return true;
	},
	render() {
		return (
			<h1>Child Component</h1>
		)
	}
})
