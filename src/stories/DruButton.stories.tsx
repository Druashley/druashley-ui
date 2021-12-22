import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DruButton } from "../components/DruButton";

export default {
  title: "Dru/Button",
  component: DruButton,
  argTypes: {
    background: {
      control: "radio",
      options: ["#D1E8E4", "#C37B89", "#BCCC9A", "#EAE7C6"],
    },
  },
} as ComponentMeta<typeof DruButton>;

const Template: ComponentStory<typeof DruButton> = (args) => (
  <DruButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
  color: "#000",
  background: "#BCCC9A",
  shadow: true,
  bold: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Button",
  color: "#000",
  background: "#EAE7C6",
  shadow: false,
  bold: false,
};
