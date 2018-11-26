import React from 'react';

const RoleDisplay = ({ role, handleCheck }) => (
  <tr key={role.id}>
    <td>{role.name}</td>
    <td>{role.users.map(user => user.image)}</td>
    <td className="col-center">
      <label htmlFor={`activity-${role.id}`}>
        <input
          type="checkbox"
          value={role.id}
          onChange={handleCheck}
          checked={role.active}
        />
      </label>
    </td>
    <td className="col-center">
      <a href={`edict/${role.id}`}>Editar</a>
    </td>
  </tr>
);

export default RoleDisplay;
