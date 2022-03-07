import React from 'react'
import { Container } from './styles/Container.styled'
import { StyledHeader, Nav, Logo } from './styles/Header.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='./images/logo.svg' alt='' />
          <Button>
            Stake ₳D₳
            <span class='icon-button'>☠</span>
          </Button>
        </Nav>
      </Container>
    </StyledHeader>
  )
}
