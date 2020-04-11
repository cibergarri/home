import React from 'react';

import {
  Main, Header, Logo, Link,
} from './style';

function App() {
  return (
    <Main>
      <Header>
        <Logo alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link>Learn React</Link>
      </Header>
    </Main>
  );
}

export default App;
