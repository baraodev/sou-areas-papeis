import React, { Fragment } from 'react';

import RoleDisplay from '../RoleDisplay';

import './styles.scss';

const TableRoles = ({ roles, handleCheck }) => (
  <Fragment>
    {Object.keys(roles).map(key => (
      <table className="table-roles" cellSpacing="0" key={key}>
        <thead>
          <tr>
            <th colSpan="5" className="area">
              {key}
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>Papel</th>
            <th>Usuários</th>
            <th className="col-center">Ativo?</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {roles[key].map(role => (
            <RoleDisplay key={role.id} role={role} handleCheck={handleCheck} />
          ))}
        </tbody>
      </table>
    ))}
  </Fragment>
);

export default TableRoles;
