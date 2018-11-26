import React, { Component, Fragment } from 'react';

import ActionRoles from './components/ActionRoles';
import TableRoles from './components/TableRoles';

class App extends Component {
  state = {
    roles: {
      'Recursos humanos': [
        {
          id: 1,
          name: 'Diretor de RH',
          users: [
            {
              image: 'Imagenzinhas'
            },
            {
              image: 'Imagenzinhas'
            }
          ],
          active: true
        },
        {
          id: 2,
          name: 'Subdiretor de RH',
          users: [
            {
              image: 'Imagenzinhas'
            },
            {
              image: 'Imagenzinhas'
            }
          ],
          active: true
        }
      ],
      TI: [
        {
          id: 3,
          name: 'Diretor de TI',
          users: [
            {
              image: 'Imagenzinhas'
            },
            {
              image: 'Imagenzinhas'
            }
          ],
          active: true
        },
        {
          id: 4,
          name: 'Subdiretor de TI',
          users: [
            {
              image: 'Imagenzinhas'
            },
            {
              image: 'Imagenzinhas'
            }
          ],
          active: true
        }
      ]
    }
  };

  handleCheck = ({ target }) => {
    const { roles } = this.state;
    const newRoles = {};
    Object.keys(roles).forEach(key => {
      newRoles[key] = roles[key].map(role => {
        if (role.id === Number(target.value)) {
          return { ...role, active: !role.active };
        }
        return role;
      });
    });

    this.setState({ roles: newRoles });
  };

  render() {
    const { roles } = this.state;
    return (
      <Fragment>
        <ActionRoles />
        <TableRoles roles={roles} handleCheck={this.handleCheck} />
      </Fragment>
    );
  }
}

export default App;
