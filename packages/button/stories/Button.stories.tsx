import React from 'react';
import {Story, Meta} from'@storybook/react/types-6-0';
import { Button } from '../src/Button';

const componentDescription = `
  ---  

  Button description

`

export default {
  title: "Components / Button",
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Button />;

export const Default = Template.bind({});