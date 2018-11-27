import React from 'react';

import { Link } from 'react-router-dom';

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
    <Link to="/add" className="add-role">
      +
    </Link>
  </nav>
);

export default ActionRoles;
