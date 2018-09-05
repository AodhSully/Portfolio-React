import React from 'react';

import github from '../../images/icons/github.png'
import github2 from '../../images/icons/github2.png'

export default class GitHub extends React.Component {
  render() {
    return (
      <div className="gitPage">
        <h1 className="glitch" data-text="GitHub">GitHub</h1>
        <div className="gitContainer">
          <p className="gitText">Click the image below to access my GitHub repositories: </p>

          <a href="https://www.github.com/AodhSully" target="_blank" rel="noopener noreferrer"><img className="gitLogo" src={github2} alt={github2} /></a>
          <a href="https://www.github.com/AodhSully" target="_blank" rel="noopener noreferrer"><img className="gitLogo" src={github} alt={github} /></a>
        </div>
      </div>
    );
  }
}
