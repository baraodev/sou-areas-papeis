import React from 'react';

const SearchInput = props => {
  const { handleChange } = props;
  return <input type="text" onChange={handleChange} name="search" />;
};

export default SearchInput;
