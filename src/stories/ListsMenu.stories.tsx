import { ComponentStory, ComponentMeta } from "@storybook/react";

import ListsMenu from "../components/QuickList/ListsMenu";

export default {
  title: "QuickList/ListsMenu",
  component: ListsMenu,
} as ComponentMeta<typeof ListsMenu>;

const Template: ComponentStory<typeof ListsMenu> = (args) => (
  <ListsMenu {...args} />
);

export const Primary = Template.bind({});
