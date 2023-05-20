import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ onChangeFilter }) => {
  return (
    <Label htmlFor="search">
      Find contacts by name
      <Input type="text" name="search" onChange={onChangeFilter} />
    </Label>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
