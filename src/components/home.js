import React, { Component } from 'react';

import Header from './header';

 class Home extends Component {
  render() {
    return (
      <div calsssName="home">
        { Header() }
      </div>
    );
  }
}

export default Home;