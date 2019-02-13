import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Sakti Dewantoro',
      text: 'My Name'
    };
  }

  render() {
    return (
      <Content>
        <h1>
          Hello {this.state.text} {}
          {this.state.name}
        </h1>
        <button>Click Me</button>
      </Content>
    );
  }
}

export default App;
