
import React from 'react';
import Waveform from '../audioPlayer/wavesurfer';
import PlayButton from '../button/playButton';
//import WaveSurfer from '../audioPlayer/wavesurferScript';

require('wavesurfer.js');
require('wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js');
require('wavesurfer.js/dist/plugin/wavesurfer.regions.min.js');
require('wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js');

export default class Tracks extends React.Component {
  render () {
    return (
      <div className="tracksPage">
        <h1 className="glitch" data-text="Tracks">Tracks</h1>

        <div><Waveform src={'https://wavesurfer-js.org/example/media/demo.mp3'} /><PlayButton /></div>
        <div><Waveform src={'https://archive.org/download/testmp3testfile/mpthreetest.mp3'} /><PlayButton /></div>
        <div><Waveform src={'https://freesound.org/people/The%20Baron/sounds/98435/download/98435__the-baron__machine-loop-06.wav'} /><PlayButton /></div>

      </div>
    );
  }
}


//<div id="wavesurfer"></div>


//<a href="/people/The%20Baron/sounds/98435/download/98435__the-baron__machine-loop-06.wav" onclick="_gaq.push(['_trackEvent', 'Sound', 'Download', 'sound_id:98435']);afterDownloadModal('/after-download-modal/','Machine loop 06.wav');" id="download_button" title="download sound"></a>
//*[@id="download_button"]
