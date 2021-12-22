import React from "react";
import styled from "styled-components";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";

const StyledFooter = styled.footer`
  background-color: #975d69;
  color: #fff;
  padding: 5rem 0 3rem;

  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #b9b9b9;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <ul>
            <li>Druashley - A frontend web developer</li>
            <li>
              <a
                href="https://twitter.com/Dru_ashley"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/Druashley"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>{" "}
            </li>
          </ul>
        </Flex>
      </Container>
    </StyledFooter>
  );
};
