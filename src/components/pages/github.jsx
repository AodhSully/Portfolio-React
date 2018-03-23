import React from 'react';
import github from '../../images/icons/github.png'
import github2 from '../../images/icons/github2.png'

export default class Github extends React.Component {
  render() {
    return (
      <div>
        <img src={github} alt={github} />
        <img src={github2} alt={github2} />
      </div>
    );
  }
}
