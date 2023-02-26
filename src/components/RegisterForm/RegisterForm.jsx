import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from './RegisterForm.styled.jsx';
import { Container } from '../App/App.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="🙍‍♂️ Name"
          />
        </FormLabel>
        <FormLabel>
          <FormInput type="email" name="email" placeholder="📧 Email" />
        </FormLabel>
        <FormLabel>
          <FormInput
            type="password"
            name="password"
            placeholder="🔐 Password"
          />
        </FormLabel>
        <FormButton type="submit">Register</FormButton>
      </Form>
    </Container>
  );
};
