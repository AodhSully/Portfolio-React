import React from 'react';
import Waveform from '../audioPlayer/wavesurfer';

export default class Sets extends React.Component {
  render () {
    return (
      <div>
        <h1 className="glitch" data-text="Sets">Sets</h1>


        <div className="videoPlayer"><Waveform src={'https://wavesurfer-js.org/example/media/demo.mp3'} /></div>
      </div>
    );
  }
}
