import React, { Component } from 'react';

import './styles.scss';

import searchIcon from '../../assets/img/search.svg';

class ActionRoles extends Component {
  state = {
    search: ''
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    return (
      <nav className="actions-roles">
        <div className="search">
          <input
            type="text"
            onChange={this.handleChange}
            value={search}
            name="search"
            placeholder="Buscar"
          />
          <img src={searchIcon} alt="" />
        </div>
      </nav>
    );
  }
}

export default ActionRoles;
