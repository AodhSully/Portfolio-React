
import React from 'react';
import Waveform from '../audioPlayer/wavesurfer';
//import PlayButton from '../button/playButton';
//import WaveSurfer from '../audioPlayer/wavesurferScript';
import soundcloud from '../../images/icons/soundcloud2.png'

require('wavesurfer.js');
require('wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js');
require('wavesurfer.js/dist/plugin/wavesurfer.regions.min.js');
require('wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js');

export default class Tracks extends React.Component {
  render () {
    return (
      <div className="tracksPage">
        <h1 className="glitch" data-text="Tracks">Tracks</h1>
        <Waveform     />
        <div className="soundcoudTrackIcon">
          <a href="https://soundcloud.com/mrbadcat" target="_blank" rel="noopener noreferrer"><p>More Tracks & Downloads available here :</p></a>
          <a href="https://soundcloud.com/mrbadcat" target="_blank" rel="noopener noreferrer"><img className='trackIcon' src={soundcloud} alt={soundcloud}/></a>
        </div>
      </div>
    );
  }
}


// <div><Waveform
//   src={'https://wavesurfer-js.org/example/media/demo.mp3'} /></div>
// <div><Waveform src={'https://archive.org/download/testmp3testfile/mpthreetest.mp3'} /></div>
// <div><Waveform src={'https://freesound.org/people/The%20Baron/sounds/98435/download/98435__the-baron__machine-loop-06.wav'} /></div>

// pos={this.state.pos}
// onPosChange={this.handlePosChange}
// playing={this.state.playing}
//<div id="wavesurfer"></div>


//<a href="/people/The%20Baron/sounds/98435/download/98435__the-baron__machine-loop-06.wav" onclick="_gaq.push(['_trackEvent', 'Sound', 'Download', 'sound_id:98435']);afterDownloadModal('/after-download-modal/','Machine loop 06.wav');" id="download_button" title="download sound"></a>
//*[@id="download_button"]
