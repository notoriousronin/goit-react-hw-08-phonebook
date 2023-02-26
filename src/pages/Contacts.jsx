import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ListForm from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Form from 'components/Contacts/ContactsForm';
import Section from 'components/Section';
import Loader from 'components/Loader';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Container } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="">
        {isLoading && !error && <Loader />}
        <Filter />
        <ListForm />
      </Section>
    </Container>
  );
}
