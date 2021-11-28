import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

const componentDescription = `
---

  Just a simple test
`

export default {
  title: 'Test',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
} as Meta;

const Template: Story = (args): JSX.Element => <div>Test</div>;

export const Default = Template.bind({});