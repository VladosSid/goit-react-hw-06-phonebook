import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/sliceContacts/sliceContacts';

import { ContactsList } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ContactsList>
  );
};
export default ContactList;
