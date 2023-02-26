import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { HomeContainer, HomeHead, HomeText } from './Home.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <HomeContainer>
      <HomeHead>PHONEBOOK</HomeHead>
      {isLoggedIn ? (
        <HomeText>
          Thank's for using our service.{' '}
          <span role="img" aria-label="Greeting icon">
            💁
          </span>
        </HomeText>
      ) : (
        <HomeText>
          For using your phonebook you need to Register. <br />
          If you have registration then Login.{' '}
          <span role="img" aria-label="Greeting icon">
            💁
          </span>
        </HomeText>
      )}
    </HomeContainer>
  );
}
