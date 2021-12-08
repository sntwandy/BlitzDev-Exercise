/* eslint-disable react/prop-types */
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
    onClick: { action: 'clicked' },
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
} as ComponentMeta<typeof Button>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = ({
  children,
  type,
  className,
  onClick,
}) => (
  <Button type={type} className={className} onClick={onClick}>
    {children}
  </Button>
)

export const Buttons = Template.bind({})
Buttons.args = {
  children: 'Button',
  type: 'button',
  onClick: () => console.log('Clicked'),
}
