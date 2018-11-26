import React, { Component, Fragment } from 'react';

import ActionRoles from './components/ActionRoles';
import TableRoles from './components/TableRoles';

class App extends Component {
  state = {
    roles: {
      'Recursos humanos': {
        id: 1,
        name: 'Diretor de RH',
        users: [
          {
            image: 'Imagenzinhas'
          }
        ],
        active: true
      }
    }
  };

  render() {
    const { roles } = this.state;
    return (
      <Fragment>
        <ActionRoles />
        <TableRoles roles={roles} />
      </Fragment>
    );
  }
}

export default App;
