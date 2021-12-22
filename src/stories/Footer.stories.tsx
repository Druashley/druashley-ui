import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "../components/Footer";

export default {
  title: "Dru/Footer",
  components: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Standard = Template.bind({});
