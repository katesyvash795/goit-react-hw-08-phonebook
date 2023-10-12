import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeValueFilter } from 'redux/contact-filter/filtersSlice';
import { FilterContainer, Label, Input, ResetButton } from './Filters.styled';
import { getFilters } from 'redux/contact-filter/selectors';

function Filter() {
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(changeValueFilter(evt.currentTarget.value));
  };

  const resetFilters = () => {
    dispatch(changeValueFilter(''));
  };

  return (
    <FilterContainer>
      <Label>Filter contacts by name:</Label>
      <Input type="text" name="filter" value={filter} onChange={changeFilter} />
      <ResetButton type="button" onClick={resetFilters}>
        Reset filters
      </ResetButton>
    </FilterContainer>
  );
}

export default Filter;
