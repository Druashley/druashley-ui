import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card, IProject } from "../components/Card";

export default {
  title: "Dru/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const dummyProject: IProject = {
  id: 1,
  title: "Project Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla in tellus id tellus ultricies vestibulum. Suspendisse in elit felis. Pellentesque euismod porttitor risus, dictum pharetra felis ultrices eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque lacinia, turpis sit amet viverra hendrerit, nulla lectus ornare sapien, sed mattis est tellus in mauris. Ut placerat porttitor tellus a faucibus.",
  technologies: [
    { key: "AWS", data: 10 },
    { key: "Digital Ocean", data: 20 },
    { key: "React", data: 75 },
    { key: "MongoDB", data: 20 },
    { key: "Django", data: 35 },
    { key: "TailwindCSS", data: 22 },
    { key: "Django RestFramework", data: 45 },
    { key: "Stripe", data: 15 },
  ],
  url: "",
  github: "",
};

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Example = Template.bind({});

Example.args = {
  project: dummyProject,
  layout: "row",
};

export const RowReverse = Template.bind({});

RowReverse.args = {
  project: dummyProject,
  layout: "row-reverse",
};
