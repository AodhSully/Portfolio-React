import React from 'react';
import eva from '../../images/imageEditing/Artboard 2.png'
import pigalle from '../../images/imageEditing/Pigalle 3.jpg'

export default class imageEditing extends React.Component {
  render() {
    return (
      <div className="imagePage">

        <h1 className="glitch" data-text="Photoshop">Photoshop</h1>
        <div className="imageContainer">
          <p className="imageText">Examples of my Photoshop work </p>
          <div className="imageRow">
            <img className="imageEditImages" src={eva} alt={eva} />
            <img className="imageEditImages" src={pigalle} alt={pigalle} />
          </div>
        </div>

      </div>
    );
  }
}
