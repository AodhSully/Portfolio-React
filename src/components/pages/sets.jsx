import React from 'react';
// import Waveform from '../audioPlayer/wavesurfer';
import mixcloud from '../../images/icons/MixLogo.png'

export default class Sets extends React.Component {
  render () {
    return (
      <div className="setsPage">
        <div className="pageTitle">
          <h1 className="glitch" data-text="Sets">Sets</h1>
        </div>

        <div className="SetsWaveform"> </div>
          <div className="mixcoudTrackIcon">
            <a href="https://www.mixcloud.com/mrbadcat/" target="_blank" rel="noopener noreferrer"><p>Some more DJ mixes available here :</p></a>
            <a href="https://www.mixcloud.com/mrbadcat/" target="_blank" rel="noopener noreferrer"><img className='trackIcon' src={mixcloud} alt={mixcloud}/></a>
          </div>
      </div>
    );
  }
}
