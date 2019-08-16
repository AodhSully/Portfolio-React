// import React from 'react'
// import WaveSurfer from 'react-wavesurfer'
// import PlayButton from '../button/playButton'
//
// require('wavesurfer.js');
// require('wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js');
// require('wavesurfer.js/dist/plugin/wavesurfer.regions.min.js');
// require('wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js');
// export default class Waveform extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       playing: false,
//       pos: 0
//     }
//     this.clicked = this.clicked.bind(this);
//     this.handleTogglePlay = this.handleTogglePlay.bind(this);
//     this.handlePosChange = this.handlePosChange.bind(this);
//   }
//
//   clicked() {
//     console.log('boom');
//   }
//
//
//   handleTogglePlay() {
//     this.setState({
//       playing: !this.state.playing
//     });
//     console.log('play has been pressed');
//   }
//
//   handlePosChange(e) {
//     this.setState({
//       pos: e.originalArgs[0]
//     });
//   }
//
//   render() {
//     return (
//       <div className='waveform'>
//
//           <WaveSurfer
//           audioFile={'https://wavesurfer-js.org/example/media/demo.mp3'}
//           pos={this.state.pos}
//           onPosChange={this.handlePosChange}
//           playing={this.state.playing}
//           waveColor={'violet'}
//           progressColor={'purple'}
//         />
//       <PlayButton />
//
//       </div>
//     )
//   }
// }
