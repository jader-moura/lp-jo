import React from 'react';
import { Container, Profile, ProfileImg } from './styles';

const Testimony = () => {
  return (
    <Container>
      <p>
        A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
      </p>
      <Profile>
        <ProfileImg src="/profile-1.png" />
      </Profile>
    </Container>
  )
}

export default Testimony;