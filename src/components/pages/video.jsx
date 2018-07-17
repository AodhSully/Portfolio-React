import React from 'react';
import YouTube from 'react-youtube';



export default class Video extends React.Component {
  render() {
    return (
      <div className="videoPage">
        <h1 className="glitch" data-text="Video">Video</h1>

      <div className="videoElement"></div>
        <p className="videoText">A music video that was made as part of a degree project</p>
        <div className="videoPlayer"><YouTube videoId="EphzsjOyjnA"/></div>
      </div>
    );
  }
}
