import React from 'react';
import Tabs from './Tabs.js';

import ProductDetails from '../productDetails/productDetails'
import ProductSpecs from '../productSpecs/productSpecs'
import ProductReviews from '../productReviews/productReviews'

/*Displays the Tab names*/

const styles = {
  fontFamily: 'sans-serif',

};

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: 'aTab'}; //defaults to 'aTab'
  }

  render() {
    const content = {
      aTab: <ProductDetails />,
      bTab: <ProductSpecs />,
      cTab: <ProductReviews />,
      dTab: 'Tab D', //insert extra tabs here if needed also need to inert into h1 section beneath
    };

    return (
      <div style={styles}>

        <Tabs active={this.state.active}
              onChange={active => this.setState({active})}>

          <h1 key="aTab">Description</h1>
          <h1 key="bTab">Specs</h1>
          <h1 key="cTab">Reviews</h1>

        </Tabs>

        <p>{content[this.state.active]}</p>
      </div>
    );
  }
};
