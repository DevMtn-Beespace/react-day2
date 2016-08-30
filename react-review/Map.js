import React from 'react';

var Map = React.createClass({
  render() {
    return (
      <div>
        {this.props.users.map((user) => {
          return (
            <div key={user.name}>
              <h4>{user.name}</h4>
            </div>
          )
        })}
      </div>
    )
  }
})

export default Map;
