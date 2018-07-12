import React from 'react';
import YouTube from 'react-youtube';



export default class Video extends React.Component {
  render() {
    return (
      <div className="videoPage">
        <h1 className="glitch" data-text="Video">Video</h1>

        <div className="videoPlayer"><YouTube videoId="EphzsjOyjnA"/></div>

      </div>
    );
  }
}
