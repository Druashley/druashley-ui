import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  backgroundOne: string;
  backgroundTwo: string;
  color: string;
}

const StyledCaption = styled.div<Props>`
  /* background: linear-gradient(to bottom right, d1e8e4, #c37b89); */
  background: ${(props) =>
    `linear-gradient(to bottom right, ${props.backgroundOne}, ${props.backgroundTwo})`};
  padding: 3rem;
  border-radius: 2rem;
  color: ${(props) => props.color};
  p {
    opacity: 100%;
    padding: 0 1.5rem 1rem 1.5rem;
    font-size: 2.5rem;
    line-height: 3.5rem;
    font-weight: bolder;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    p {
      line-height: 2.5rem;
      font-size: 1.5rem;
    }
  }
`;

export const Caption: React.FC<Props> = ({
  label,
  color,
  backgroundOne,
  backgroundTwo,
}: Props) => {
  return (
    <StyledCaption
      backgroundOne={backgroundOne}
      backgroundTwo={backgroundTwo}
      color={color}
      label={label}
    >
      <p>{label}</p>
    </StyledCaption>
  );
};
