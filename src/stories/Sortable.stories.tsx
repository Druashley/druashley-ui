import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Sortable } from "../components/DND/Sortable";

export default {
  title: "Projects/Sortable",
  component: Sortable,
} as ComponentMeta<typeof Sortable>;

const Template: ComponentStory<typeof Sortable> = (args) => (
  <Sortable {...args} />
);

export const Primary = Template.bind({});
