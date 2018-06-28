import React, { Component } from 'react';

import Header from './header';
import Card from './card';

 class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="header__skew"></div>
        <div className="header__border"></div>
        { Header() }
        <Card />
      </div>
    );
  }
}

export default Home;