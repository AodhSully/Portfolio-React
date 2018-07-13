import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import PlayButton from '../button/playButton'

export default class Waveform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  getInitialState() {
    return {
      playing: false,
      pos: 0
    }
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }

  handleTogglePlay() {
    this.setState({
      playing: !this.state.playing
    });
  }

  handlePosChange(e) {
    this.setState({
      pos: e.originalArgs[0]
    });
  }

  componentDidMount() {
    this.$el = ReactDOM.findDOMNode(this)
    this.$waveform = this.$el.querySelector('.wave')
    this.wavesurfer = WaveSurfer.create({
      container: this.$waveform,
      waveColor: 'violet',
      progressColor: 'purple'
    })
    this.wavesurfer.load(this.props.src)
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className='waveform'>
        <div className='wave'></div>

        <PlayButton playing={this.state.playing}/>
      </div>
    )
  }
}

Waveform.defaultProps = {
  src: ""
}


// <WaveSurfer playing={this.state.playing} />

// render() {
//   return (
//     <div className='waveform'>
//       <div className='wave'></div>
//       <PlayButton />
//     </div>
//   )
// }
