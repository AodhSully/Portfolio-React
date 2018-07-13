import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import P5Wrapper from 'react-p5-wrapper';
import sketch from '../p5sketches/sketch1'
import newp5 from '../p5sketches/newp5'
import batton from '../p5sketches/batton'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import ball from '../p5sketches/ball';
/*
  example at https://codesandbox.io/s/lp602ljjj7
  github at https://github.com/leandrowd/react-responsive-carousel contains all attribute descriptions
*/

/*static css for produc images carousel images used should be 500px X 500px in size. otherwise they will strech and look strange*/


export default class P5Carousel extends React.Component {
    render() {
        return (
            <div className="carouselImage" >
              <div >

                <Carousel showArrows={true} showThumbs={false} showStatus={false}
                          infiniteLoop={true} stopOnHover={true} interval={3000} >
                  <div>

                    <P5Wrapper className="p5canvas" sketch={sketch}  />
                    <p className="p5text">Globe</p>

                  </div>
                  <div>
                    <P5Wrapper className="p5canvas" sketch={newp5}  />
                    <p>Square</p>
                  </div>

                  <div>
                    <P5Wrapper className="p5canvas" sketch={batton}  />
                    <p>Spinner</p>
                  </div>

                  <div>
                    <P5Wrapper sketch={ball}  />
                    <p>Ball</p>
                  </div>

                </Carousel>
              </div>
            </div>
        );
    }
};
