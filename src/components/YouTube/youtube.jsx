import React from 'react';
import YouTube from 'react-youtube';

export default class YouTube extends React.Component {
  render() {
    const opts = {

      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

//https://www.youtube.com/watch?v=EphzsjOyjnA&t=30s
