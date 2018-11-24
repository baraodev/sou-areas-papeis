import React, { Component } from 'react';

import SearchInput from '../SearchInput';

class ActionRoles extends Component {
  state = {
    searchValue: ''
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <nav className="actions-roles">
        <SearchInput handleChange={this.handleChange} value={searchValue} />
      </nav>
    );
  }
}

export default ActionRoles;
