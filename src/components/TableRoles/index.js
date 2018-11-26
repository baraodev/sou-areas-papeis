import React from 'react';

import RoleDisplay from '../RoleDisplay';

import './styles.scss';

const TableRoles = ({ roles }) => (
  <table className="table-roles">
    {Object.keys(roles).map(key => (
      <RoleDisplay key={key} role={roles[key]} />
    ))}
  </table>
);

export default TableRoles;
