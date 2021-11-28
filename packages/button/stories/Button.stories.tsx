import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../src/Button';

const componentDescription = `
---  

The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

### Usage

\`\`\`tsx

// import { Button } from 'zeerna-ui/button';
<Button
  type="submit"
  variationType="primary"
  onClick={() => console.log('clicked')}
>
  Click Me!
</Button>

\`\`\`

---
`;

export default {
  title: 'Components / Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    type: {
      description: 'The HTML button type',
      options: ['button', 'reset', 'submit'],
      control: {
        type: 'select',
      },
    },
    variationType: {
      description: 'The style variation',
      options: ['primary', 'secondary', 'rounded', 'ghost'],
      control: {
        type: 'radio',
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Button onClick={() => console.log('clicked')} {...args}>
    Test
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variationType: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variationType: 'secondary',
};

export const Rounded = Template.bind({});
Rounded.args = {
  variationType: 'rounded',
};

export const Ghost = Template.bind({});
Rounded.args = {
  variationType: 'ghost',
};
