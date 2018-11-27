import React, { Fragment } from 'react';

import { ModalContainer } from 'react-router-modal';

import Routes from './Routes';

const App = () => {
  return (
    <Fragment>
      <Routes />
      <ModalContainer />
    </Fragment>
  );
};

export default App;
