import React from 'react';
//import AnimatedWrapper from "../animatedWrapper/animatedWrapper";

import github from '../../images/icons/github.png'
import github2 from '../../images/icons/github2.png'


class GitHub extends React.Component {
  render() {
    return (
      <div className="gitPage">
        <h1 className="glitch" data-text="GitHub">GitHub</h1>
        <img className="gitLogo" src={github} alt={github} />
        <img className="gitLogo" src={github2} alt={github2} />
      </div>
    );
  }
}

export default GitHub
