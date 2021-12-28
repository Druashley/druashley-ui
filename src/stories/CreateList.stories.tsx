import { ComponentStory, ComponentMeta } from "@storybook/react";

import CreateList from "../components/QuickList/CreateList";

export default {
  title: "QuickList/CreateList",
  component: CreateList,
} as ComponentMeta<typeof CreateList>;

const Template: ComponentStory<typeof CreateList> = (args) => (
  <CreateList {...args} />
);

export const Primary = Template.bind({});
