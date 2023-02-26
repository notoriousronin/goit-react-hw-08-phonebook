import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Form,
  LoginLabel,
  LoginInput,
  LoginButton,
} from './LoginForm.styled.jsx';
import { Container } from '../App/App.styled';

export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          <LoginInput type="email" name="email" placeholder="📧 Email" />
        </LoginLabel>
        <LoginLabel>
          <LoginInput
            type="password"
            name="password"
            placeholder="🔐 Password"
          />
        </LoginLabel>
        <LoginButton type="submit">Login</LoginButton>
      </Form>
    </Container>
  );
}
