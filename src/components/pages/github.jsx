import React from 'react';
//import AnimatedWrapper from "../animatedWrapper/animatedWrapper";

import github from '../../images/icons/github.png'
import github2 from '../../images/icons/github2.png'


class GitHub extends React.Component {
  render() {
    return (
      <div>
        <img src={github} alt={github} />
        <img src={github2} alt={github2} />
      </div>
    );
  }
}

export default GitHub
