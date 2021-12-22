import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Caption } from "../components/Caption";

export default {
  title: "Dru/Caption",
  component: Caption,
  argTypes: {
    color: { control: "color" },
    backgroundOne: { control: "color" },
    backgroundTwo: { control: "color" },
  },
} as ComponentMeta<typeof Caption>;

const Template: ComponentStory<typeof Caption> = (args) => (
  <Caption {...args} />
);

export const Long = Template.bind({});

Long.args = {
  label:
    "Long Label: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla in tellus id tellus ultricies vestibulum. Suspendisse in elit felis. Pellentesque euismod porttitor risus, dictum pharetra felis ultrices eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  backgroundOne: "#D1E8E4",
  backgroundTwo: "#C37B89",
  color: "#000",
};

export const Short = Template.bind({});

Short.args = {
  label:
    "With two years of experience, Druashley has earned a reputation as one of Southern Oregon's premier frontend web developers.",
  backgroundOne: "#BCCC9A",
  backgroundTwo: "#EAE7C6",
  color: "#000",
};
