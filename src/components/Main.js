import React from 'react';
import { StyledMain } from './styles/Main.styled';
import {Flex} from './styles/Flex.styled'
import { StyledButton } from './styles/Button.styled';

const Main = () => {
  return (
    <StyledMain>
      <Flex>
        <div>
          <img src='./images/illustration-mockups.svg' alt='' />
        </div>
        <div>
          <h2>Build The Community Your Fans Will Love</h2>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
Create connections with your users as you engage in genuine discussion. </p>
          <StyledButton>Register</StyledButton>
        </div>
      </Flex>
    </StyledMain>);
};

export default Main;
