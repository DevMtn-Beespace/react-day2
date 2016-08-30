import React from 'react';

var Child =  React.createClass({
  getInitialState() {
    return {
      temp: ""
    }
  },
  render () {
    return (
      <div>
        {this.props.data}
        <input onChange={this.handleChange}/>
        <button onClick={this.props.setDisplay.bind(null, this.state.temp)}>Set Display</button>
      </div>
    )
  },
  handleChange(e) {
    this.setState({
      temp: e.target.value,
    })
  }
})

export default Child;
