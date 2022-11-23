import React from 'react';
import {Container, BankIcon, Logo, BackButton} from './styles';

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false}: Props) {
  return (
    <Container>
      { showBackButton &&
        <BackButton >
      <BankIcon/>
      </BackButton>
      }
        <Logo source={logoImg}/>
    </Container>
  );
}