import React, { Component, Fragment } from 'react';

import ActionRoles from '../../components/ActionRoles';
import TableRoles from '../../components/TableRoles';

class ListRoles extends Component {
  state = {
    search: '',
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

  handleSearch = e => {
    this.setState({ search: e.target.value });
  };

  filterRoles = roles => {
    const { search } = this.state;

    if (!search) return roles;

    const patt = new RegExp(`${search}`, 'i');

    const newRoles = {};
    Object.keys(roles).forEach(key => {
      newRoles[key] = roles[key].filter(role => patt.test(role.name));
      if (!newRoles[key].length) delete newRoles[key];
    });
    return newRoles;
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
    const { roles, search } = this.state;
    return (
      <Fragment>
        <ActionRoles search={search} handleSearch={this.handleSearch} />
        <TableRoles
          roles={this.filterRoles(roles)}
          handleCheck={this.handleCheck}
        />
      </Fragment>
    );
  }
}

export default ListRoles;
