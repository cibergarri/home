import React from 'react';


import {
  Main, Header, Logo, Link, Body, CustomButton
} from './style';

function App() {
  return (
    <Main>
      <Header>
        {/* <Logo alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Link>Playground</Link>
      </Header>
      <Body>
        <CustomButton>Hello World</CustomButton>
      </Body>
    </Main>
  );
}

export default App;
