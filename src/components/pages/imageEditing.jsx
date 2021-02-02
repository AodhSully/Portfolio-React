import React from 'react';
import eva from '../../images/imageEditing/Artboard 2.png'
import pigalle from '../../images/imageEditing/Pigalle 3.jpg'
// import index from '../../images/imageEditing/index.jpg'
// import index2 from '../../images/imageEditing/index2.jpg'
// import index3 from '../../images/imageEditing/index3.jpg'
// import index4 from '../../images/imageEditing/index4.jpg'

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
            {/*
              <img className="imageEditImages" src={index} alt={index} />
              <img className="imageEditImages" src={index3} alt={index3} />
              <img className="imageEditImages" src={index4} alt={index4} />
              <img className="imageEditImages" src={index2} alt={index2} />
              */}
          </div>
        </div>

      </div>
    );
  }
}
