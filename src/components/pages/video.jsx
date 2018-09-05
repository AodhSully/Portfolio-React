import React from 'react';
import YouTube from 'react-youtube';

export default class Video extends React.Component {
  render() {
    return (
      <div className="videoPage">
        <h1 className="glitch" data-text="Video">Video</h1>

        <div className="videoElement"></div>
        <h2 className="videoText">"A Walk in the Woods"</h2>
        <p className="videoText">This video was shot in Glengarriff Woods, West Cork</p>
        <p className="videoText">and is made up of over 3000 still images </p>
        <p className="videoText">Shot on a Cannon 1000D</p>
        <p className="videoText">Edited in Sony Vegas</p>
        <p className="videoText">Music Created in Ableton Live 8</p>
        <div className="videoPlayer" align="middle"><YouTube videoId="EphzsjOyjnA"/></div>
      </div>
    );
  }
}
