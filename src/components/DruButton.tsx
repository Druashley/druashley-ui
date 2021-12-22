import React from "react";
import styled from "styled-components";

interface DruButtonProps {
  label: string;
  background: "#D1E8E4" | "#C37B89" | "#BCCC9A" | "#EAE7C6";
  color: string;
  shadow: boolean;
  bold: boolean;
}

const StyledDruButton = styled.button<DruButtonProps>`
  background-color: ${(props) => props.background};

  border-radius: 50px;
  border: none;
  box-shadow: ${(props) =>
    props.shadow
      ? "0 0 0.75rem rgba(0, 0, 0, 0.15)"
      : "0 0 0 rgba(0, 0, 0, 0.15)"};
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${(props) => (props.bold ? 700 : 500)};
  padding: 1rem 2rem;
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const DruButton: React.FC<DruButtonProps> = ({
  label,
  background,
  color,
  shadow,
  bold,
}: DruButtonProps) => {
  return (
    <StyledDruButton
      label={label}
      background={background}
      color={color}
      shadow={shadow}
      bold={bold}
    >
      {label}
    </StyledDruButton>
  );
};
