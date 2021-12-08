/**
 *
 */

import { ComponentStory, ComponentMeta } from '@storybook/react'

import '../styles/index.css'

/* Component */
import Input from '../components/Input'

export default {
  title: 'UI/Components/Input',
  component: Input,
  argTypes: {
    title: { control: 'text' },
    id: { control: 'text' },
    name: { control: 'text' },
    autoComplete: { control: 'text' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'email', 'password', 'checkbox', 'radio', 'hidden'],
      },
    },
  },
} as ComponentMeta<typeof Input>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Inputs = Template.bind({})
Inputs.args = {
  id: 'input-1',
  name: 'input-1',
  type: 'text',
  autoComplete: 'off',
  required: true,
  placeholder: 'Input',
  value: '',
}
