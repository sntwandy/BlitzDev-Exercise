/**
 *
 */

import { ComponentStory, ComponentMeta } from '@storybook/react'

import '../styles/index.css'

/* Component */
import Button from '../components/Button'

export default {
  title: 'UI/Components/Button',
  component: Button,
  argTypes: {
    children: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
    className: { control: { type: 'text' } },
  },
} as ComponentMeta<typeof Button>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Buttons = Template.bind({})
Buttons.args = {
  children: 'Button',
  type: 'button',
}
