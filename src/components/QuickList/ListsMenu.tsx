import React from "react";
import styled from "styled-components";

// css inspired by https://codepen.io/mike-schultz/pen/NgQvGO
// I just fit it to work with the project! shoutout to Mike Schultz!

const StyledListsMenu = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Laila:wght@300;400;500;700&family=Permanent+Marker&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #dbd8e3;
  font-family: "Laila", sans-serif;

  #box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-bottom: 1rem;
    max-width: 400px;
    padding: 1.5rem 0.75rem;
  }

  .list-container {
    --borderWidth: 3px;
    background: #1d1f20;
    position: relative;
    border-radius: var(--borderWidth);

    &:hover {
      color: #fff;
      opacity: 0.9;
      transform: scale(0.98);
    }
  }

  .list-container:after {
    content: "";
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2);
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    border-radius: calc(2 * var(--borderWidth));
    z-index: -1;
    animation: animatedgradient 3s ease alternate infinite;
    background-size: 300% 300%;
  }
  h1 {
    margin: 0;
    font-size: 2em;
    font-weight: 700;
  }
  h2 {
    font-size: 1.25em;
    font-weight: 700;
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export interface Item {
  id: number;
  name: string;
}

export interface List {
  id: number;
  name: string;
  items: Item[];
}

const ListsMenu: React.FC = () => {
  const allLists: List[] = [
    {
      id: 1,
      name: "First List",
      items: [
        { id: Math.random(), name: "Item Name" },
        { id: Math.random(), name: "Item Name" },
        { id: Math.random(), name: "Item Name" },
      ],
    },
    {
      id: 2,
      name: "Second List",
      items: [
        { id: Math.random(), name: "Item Name" },
        { id: Math.random(), name: "Item Name" },
        { id: Math.random(), name: "Item Name" },
        { id: Math.random(), name: "Item Name" },
      ],
    },
    {
      id: 3,
      name: "Third List List",
      items: [
        { id: Math.random(), name: "Item Name" },
        { id: Math.random(), name: "Item Name" },
        { id: Math.random(), name: "Item Name" },
        { id: Math.random(), name: "Item Name" },
        { id: Math.random(), name: "Item Name" },
      ],
    },
  ];
  return (
    <StyledListsMenu>
      {allLists.map((list) => (
        <div key={list.id} className="list-container " id="box">
          <h1>{list.name}</h1>
          <h2>Count: {list.items.length}</h2>
        </div>
      ))}
    </StyledListsMenu>
  );
};

export default ListsMenu;
