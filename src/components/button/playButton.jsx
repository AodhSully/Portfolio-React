import React from 'react';

var styles = {
  textAlign: 'center'
}

export default class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    console.log("play")
  }

  render() {
    return (
      <button className="btn btn-primary" style={styles} onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Play' : 'Pause'}

      </button>
    );
  }
}

// <i className="glyphicon glyphicon-play"></i>
