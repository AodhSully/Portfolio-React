import React, { Component } from 'react';
import github from '../../images/icons/github2.png'
import soundcloud from '../../images/icons/soundcloud2.png'
import linkedin from '../../images/icons/linkedin.png'
import mixcloud from '../../images/icons/mixcloud.png'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <img className='icon' src={github} alt={github}/>
        <img className='icon' src={linkedin} alt={linkedin}/>
        <img className='icon' src={soundcloud} alt={soundcloud}/>
        <img className='icon' src={mixcloud} alt={mixcloud}/>
        <p>stuff goes here</p>
      </footer>
    );
  }
}

export default Footer;
