import React from 'react';
import Waveform from 'waveform-react';

// Optionally handle user manually changing position (0 - 1)
// Marker position on waveform (0 - 1)
// redraw waveform on window size change (default: true)
// Show position marker
// animate waveform on draw (default: true)
// waveform color
// width of each rendered point (min: 1, max: 10)
// waveform width
// Audio buffer
// waveform height
// Position marker color
// Position marker width (in pixels)

export default class Audio extends React.Component {
  render() {
    return (
        <Waveform
                buffer={this.state.buffer}
                markerStyle={{
                  height: 150,
                  color: '#fff',
                  width: 4
                }}

                onPositionChange={pos => console.log(pos)}
                position={0.5}
                responsive={false}
                showPosition={true}

                waveStyle={{
                  animate: true,
                  color: '#fff',
                  pointWidth: 1
                }}

                width: 900
            />
    );
  }
}
