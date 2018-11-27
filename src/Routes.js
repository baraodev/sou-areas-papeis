import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ModalRoute } from 'react-router-modal';

import ListRoles from './pages/ListRoles';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ListRoles} />
        <ModalRoute path="/add" component={ModalRoles} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
