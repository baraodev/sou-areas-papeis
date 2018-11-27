import React, { Fragment } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { ModalRoute, ModalContainer } from 'react-router-modal';
import 'react-router-modal/css/react-router-modal.css';

import ListRoles from './pages/ListRoles';
import ModalRoles from './components/ModalRoles';

const Routes = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <ModalRoute path="/add" parentPath="/" component={ModalRoles} />
        <Route path="/" component={ListRoles} />
        <ModalContainer />
      </Fragment>
    </BrowserRouter>
  );
};

export default Routes;
