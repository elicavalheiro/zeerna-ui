import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

const pageDescription = `
  ---

  Introduction
`

export default {
  title: "Guides / Introduction",
  parameters: {
    docs: {
      description: {
        component: pageDescription,
      },
    },
  },
} as Meta;

const Template: Story = () => <div>Introduction</div>;

export const Default = Template.bind({});