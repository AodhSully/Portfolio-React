import React, { Component } from 'react';
import github from '../../images/icons/github2.png'
import soundcloud from '../../images/icons/soundcloud2.png'
import linkedin from '../../images/icons/linkedin.png'
import mixcloud from '../../images/icons/mixcloudIcon.png'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="https://www.github.com/AodhSully"><img className='icon' src={github} alt={github}/></a>
        <a href="https://www.linkedin.com/in/aodhosullivan/"><img className='icon' src={linkedin} alt={linkedin}/></a>
        <a href="https://soundcloud.com/mrbadcat"><img className='icon' src={soundcloud} alt={soundcloud}/></a>
        <a href="https://www.mixcloud.com/mrbadcat/"><img className='icon' src={mixcloud} alt={mixcloud}/></a>
      
      </footer>
    );
  }
}

export default Footer;
