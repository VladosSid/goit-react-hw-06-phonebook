import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import useLocalStorage from '../hooks/useLocalStorage';

import FormContacts from './FormContacts';
import ContactList from './ContactList';
import FilterContacts from './FilterContacts';

import { GlobalBox } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts');
  const [filterValue, setFilter] = useState('');
  const [filterResult, setFilterResult] = useState([]);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(5),
      name,
      number,
    };

    setContacts(state => [contact, ...state]);
  };

  const deleteContact = ContactId => {
    setContacts(state => state.filter(contact => contact.id !== ContactId));
  };

  useEffect(() => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
    setFilterResult(visibleContacts);
  }, [filterValue, contacts]);

  return (
    <GlobalBox>
      <h1>Phoneboock</h1>
      <FormContacts onSubmit={addContact} listContacts={contacts} />
      <FilterContacts
        textTitel="Find contacts by name"
        filterData={filterValue}
        onChange={e => setFilter(e.currentTarget.value)}
      />
      <ContactList listContacts={filterResult} deleteContact={deleteContact} />
    </GlobalBox>
  );
};

export default App;
