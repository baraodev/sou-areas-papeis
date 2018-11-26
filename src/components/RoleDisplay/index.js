import React, { Fragment } from 'react';

const RoleDisplay = ({ role }) => (
  <Fragment>
    <tbody>
      <tr>
        <td>{role.name}</td>
        <td>{role.users.map(user => user.image)}</td>
        <td>
          <label htmlFor={`activity-${role.id}`}>
            Ativado?
            <input type="checkbox" id={`activity-${role.id}`} />
          </label>
        </td>
        <td>
          <a href={`edict/${role.id}`}>Editar</a>
        </td>
      </tr>
    </tbody>
  </Fragment>
);

export default RoleDisplay;
