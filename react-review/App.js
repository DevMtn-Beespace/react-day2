import React from 'react';
import Child from './Child.js';
import Map from './Map.js';

export default React.createClass({
  getInitialState() {
    return {
      "name": "Click me",
      "users": [{name: "Jason"}, {name: "Michael"}, {name: "James"}, {name: "Cindy"}]
    }
  },
  render () {
    return (
      <div className="asdf" style={{width: "200px", borderBottom: "1px solid black"}}>
      <h1 ref={(blurp) => this.h1 = blurp}>{this.state.name}</h1>
      <input onChange={this.handleChange}/>
      <div onClick={this.handleClick}>
          {this.state.name}
      </div>
      <br />
      {/* <Child data={this.state.temp}/> */}
      <Child data={this.state.temp} setDisplay={this.displayChange}/>
      <Map users={this.state.users}/>
      </div>
    )
  },
  handleChange(e) {
    this.setState({
      temp: e.target.value,
    })
  },
  handleClick() {
    this.setState({
      name: this.state.temp,
    })
  },
  displayChange(value) {
    console.log(this.h1);
    this.setState({
      name: value,
    })
  }
});
