import React, { Component } from 'react';
import './ToggleSwitch.scss';

class ToggleSwitch extends Component {
  state = {Mode: false};

  handleMode = (mode) => {
    if (mode) {
      console.log('Driving');
    } else {
      console.log('Biking');
    }

    // Populate map with 



  };

  render() {
    return (
      <div className="toggle-switch">
            <input
              type="checkbox"
              className="toggle-switch-checkbox"
              name={this.props.Name}
              id={this.props.Name}
              onClick={
                
                () => {
                  this.setState({Mode: !this.state.Mode});
                  this.handleMode(this.state.Mode);
              }
              
              }
            />
            <label className="toggle-switch-label" htmlFor={this.props.Name}>
              <span className="toggle-switch-inner" />
              <span className="toggle-switch-switch" />
            </label>
      </div>
    );
  }
}

export default ToggleSwitch;