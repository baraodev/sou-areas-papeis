import React, { Fragment } from 'react';

const RoleDisplay = ({ key, role }) => (
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
    <tbody>
      <tr>
        <td>{role.name}</td>
        <td>{role.users[0].image}</td>
        <td>
          <label htmlFor="activity">
            Ativado?
            <input type="checkbox" id="activity" />
          </label>
        </td>
        <td>
          <a href="/edit/{role.id}">Editar</a>
        </td>
      </tr>
    </tbody>
  </Fragment>
);

export default RoleDisplay;
