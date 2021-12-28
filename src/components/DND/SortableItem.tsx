import React from "react";
import styled from "styled-components";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  id: string;
  label: string;
  key: string;
  removeItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledItem = styled.div`
  border: 1px solid black;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  max-width: 250px;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(180deg, #141313, #2b2929);
  cursor: grabbing;
  color: white;
`;

export const SortableItem: React.FC<Props> = ({
  id,
  label,
  removeItem,
}: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <StyledItem ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div>{label}</div>
    </StyledItem>
  );
};
