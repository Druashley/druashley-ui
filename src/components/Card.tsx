import React from "react";
import styled from "styled-components";
import { BubbleChart } from "reaviz";

export interface IProject {
  id: number;
  title: string;
  description: string;
  technologies: ITechnologies[];
  image?: string;
  url: string;
  github: string;
}

interface ITechnologies {
  key: string;
  data: number;
  image?: string;
}

interface Props {
  project: IProject;
  layout: string;
}

const StyledCard = styled.div<Props>`
  display: flex;
  align-items: start;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
  margin: 0 auto;
  max-width: 1000px;
  flex-direction: ${(props) => props.layout};

  h2 {
    font-size: 2em;
  }

  h3 {
    text-align: center;
  }

  a {
    margin-right: 0.25rem;
    color: #98a57b;
  }

  & > div {
    flex: 1;
  }

  .tech-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // global settings

  padding: 1rem 1.5rem;
  p {
    opacity: 0.7;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    p {
      text-align: left;
    }
  }
`;

export const Card: React.FC<Props> = ({ project, layout }: Props) => {
  return (
    <StyledCard layout={layout} project={project}>
      <div>
        <h2>{project.title}</h2>
        <div>
          <a href={project.url} target="_blank" rel="noreferrer">
            Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
        <p>{project.description}</p>
      </div>
      <div className="tech-container">
        <h3>Highlighted Tech</h3>
        <BubbleChart height={400} width={400} data={project.technologies} />
      </div>
    </StyledCard>
  );
};
