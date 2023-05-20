import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setСontacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    let contactsList = [...contacts];
    if (contactsList.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      contactsList.push(newContact);
      setСontacts(contactsList);
    }
  };

  const handleDeleteBtn = name => {
    let newContactlist = contacts.filter(contact => contact.name !== name);
    setСontacts(newContactlist);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={(evt) => {
        setFilter(evt.target.value)
      }} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDeleteContact={handleDeleteBtn}
      />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

// componentDidMount() {
//   const contactsInLocalStorage = JSON.parse(localStorage.getItem('contacts'));
//   if (contactsInLocalStorage) {
//     this.setState({ contacts: contactsInLocalStorage });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// addContact = newContact => {
//   let contactsList = [...this.state.contacts];
//   if (contactsList.find(contact => contact.name === newContact.name)) {
//     alert(`${newContact.name} is already in contacts.`);
//   } else {
//     contactsList.push(newContact);
//     this.setState({ contacts: contactsList });
//   }
// };

// handleFilter = evt => {
//   this.setState({ filter: evt.target.value });
// };

// handleDeleteBtn = name => {
//   let contactsList = [...this.state.contacts];
//   let newContactlist = contactsList.filter(contact => contact.name !== name);
//   this.setState({ contacts: newContactlist });
// };

//   render() {
//     const { contacts, filter } = this.state;
//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter value={filter} onChangeFilter={this.handleFilter} />
//         <ContactList
//           contacts={contacts}
//           filter={filter}
//           onDeleteContact={this.handleDeleteBtn}
//         />
//       </div>
//     );
//   }
// }
