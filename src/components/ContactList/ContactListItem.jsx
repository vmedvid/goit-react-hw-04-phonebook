import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
import { ContactDeleteBtn } from './ContactDeleteBtn.styled';

export const ContactListItem = ({ name, number, onDeleteContact }) => {
  return (
    <ListItem>
      {name}: {number}
      <ContactDeleteBtn
        type="button"
        key={name}
        onClick={() => onDeleteContact(name)}
      >
        Delete{' '}
      </ContactDeleteBtn>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
