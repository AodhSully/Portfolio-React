
import React from 'react'
// import ReactDOM from 'react-dom'
import WaveSurfer from 'react-wavesurfer'
import PlayButton from '../button/playButton'

require('wavesurfer.js');
require('wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js');
require('wavesurfer.js/dist/plugin/wavesurfer.regions.min.js');
require('wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js');
export default class Waveform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      pos: 0
    }
    this.clicked = this.clicked.bind(this);
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }

  clicked() {

    console.log('boom');
  }


  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
    console.log('play has been pressed');
  }

  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }




  render() {
    return (
      <div className='waveform'>

          <WaveSurfer
          audioFile={'https://wavesurfer-js.org/example/media/demo.mp3'}
          pos={this.state.pos}
          onPosChange={this.handlePosChange}
          playing={this.state.playing}
          waveColor={'violet'}
          progressColor={'purple'}
        />
      <PlayButton />


      </div>
    )
  }
}

// <button onClick={this.state.clicked}>Boom</button>
// <PlayButton onClick={this.state.handleTogglePlay}/>
// Waveform.defaultProps = {
//   src: ""
// }

//
// getInitialState() {
//   return {
//
//   }
// }

// componentDidMount() {
//   this.$el = ReactDOM.findDOMNode(this)
//   this.$waveform = this.$el.querySelector('.wave')
//   this.wavesurfer = WaveSurfer.create({
//     container: this.$waveform,
//     waveColor: 'violet',
//     progressColor: 'purple',
//   })
//   this.wavesurfer.load(this.props.src)
// }

// componentWillUnmount() {
// }


// <WaveSurfer playing={this.state.playing} />

// render() {
//   return (
//     <div className='waveform'>
//       <div className='wave'></div>
//       <PlayButton />
//     </div>
//   )
// }







// pos: this.state.pos,
// onPosChange: this.handlePosChange,
// playing: this.state.playing
