import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from 'redux/Operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm></ContactForm>
      <Filter></Filter>
      <h2>Contacts</h2>
      {contacts.length !== 0 && <ContactList></ContactList>}
    </div>
  );
};
