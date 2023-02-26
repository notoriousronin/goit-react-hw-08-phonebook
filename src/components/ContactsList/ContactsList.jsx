import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  ContactList,
  ContactItem,
  ContactName,
  ContactButton,
  ContactNumber,
} from './ContactsList.styled';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

export default function ListForm() {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ContactList>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={name}>
          <ContactName>
            {name}: <ContactNumber>{number}</ContactNumber>
          </ContactName>
          <ContactButton
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactList>
  );
}

ListForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
