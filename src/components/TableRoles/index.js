import React, { Fragment } from 'react';

import RoleDisplay from '../RoleDisplay';

import './styles.scss';

const TableRoles = ({ roles }) => (
  <table className="table-roles">
    {Object.keys(roles).map(key => (
      <Fragment>
        <thead>
          <tr>
            <th colSpan="5">
              <h1 className="area">{key}</h1>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>Papel</th>
            <th>Usuários</th>
            <th>Atividade</th>
            <th>Ações</th>
          </tr>
        </thead>
        {roles[key].map(role => (
          <RoleDisplay key={role.id} role={role} />
        ))}
      </Fragment>
    ))}
  </table>
);

export default TableRoles;
