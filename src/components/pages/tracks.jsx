import React from 'react';
import Waveform from '../audioPlayer/waveform';

export default class Tracks extends React.Component {
  render () {
    return (
      <div>
        <h1 className="glitch" data-text="Tracks">Tracks</h1>
        <Waveform audioFile="../audio/La Realite.mp3"/>
      </div>
    );
  }
}
