import React from 'react';
import soundcloud from '../../images/icons/soundcloud2.png'

export default class Mixing extends React.Component {
  render () {
    return (
      <div className="mixingPage">
        <h1 className="glitch" data-text="Mixing">Mixing</h1>

          <div className="soundcoudTrackIcon">
            <a href="https://soundcloud.com/mrbadcat" target="_blank" rel="noopener noreferrer"><p>More Tracks available here :</p></a>
            <a href="https://soundcloud.com/mrbadcat" target="_blank" rel="noopener noreferrer"><img className='trackIcon' src={soundcloud} alt={soundcloud}/></a>
          </div>
          
      </div>
    );
  }
}
