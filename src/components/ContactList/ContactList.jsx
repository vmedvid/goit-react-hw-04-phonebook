import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const newList = () => {
    const subString = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(subString)
    );
  };

  return (
    <List>
      {newList().map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
