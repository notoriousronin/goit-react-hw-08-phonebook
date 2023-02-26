import { useState } from 'react';
import { selectContacts } from '../../redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import {
  ContactForm,
  ContactLabel,
  ContactInput,
  ContactButton,
} from './ContactsForm.styled';
import { Container } from '../App/App.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const changeName = e => {
    setName(e.target.value);
  };

  const handleChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (
      contacts.find(item => item.number.toLowerCase() === number.toLowerCase())
    ) {
      alert(`${number} is already in contacts`);
      return;
    }
    dispatch(
      addContact({
        name,
        number,
      })
    );
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <ContactForm onSubmit={handleSubmit}>
        <ContactLabel>
          <ContactInput
            type="text"
            name="name"
            onChange={changeName}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="🙍‍♂️ Name"
          />
        </ContactLabel>
        <ContactLabel>
          <ContactInput
            type="tel"
            name="number"
            onChange={handleChange}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="☎️ Number"
          />
        </ContactLabel>
        <ContactButton type="submit">Add contact</ContactButton>
      </ContactForm>
    </Container>
  );
}
