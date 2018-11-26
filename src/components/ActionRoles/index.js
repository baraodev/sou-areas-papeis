import React from 'react';

import './styles.scss';

import searchIcon from '../../assets/img/search.svg';

const ActionRoles = ({ search, handleSearch }) => (
  <nav className="actions-roles">
    <div className="search">
      <input
        type="text"
        onChange={handleSearch}
        value={search}
        name="search"
        placeholder="Buscar"
      />
      <img src={searchIcon} alt="" />
    </div>
    <a href="/add" className="add-role">
      +
    </a>
  </nav>
);

export default ActionRoles;
