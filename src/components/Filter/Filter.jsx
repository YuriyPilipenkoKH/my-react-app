import { FilterInput } from './Filter.styled';
import { PropTypes } from 'prop-types';

export const Filter = ({ value, onFilterChange }) => (
  <>
    <label>
      <FilterInput
        type="text"
        value={value}
        onChange={onFilterChange}
        placeholder="Name or phone to seach..."
      />
    </label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func,
};
