import { Input ,  Label} from '../ContactForm/ContactForm.styled';
import { PropTypes } from 'prop-types';

export const Filter = ({ value, onFilterChange }) => (
  <>
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={value}
        onChange={onFilterChange}
        // placeholder="Name or phone to seach..."
      />
    </Label>
  </>
);

Filter.propTypes = {
  value: PropTypes.string,
  onFilterChange: PropTypes.func,
};
