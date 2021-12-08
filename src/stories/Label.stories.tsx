/**
 *
 */

import { ComponentStory, ComponentMeta } from '@storybook/react'

import '../styles/index.css'

/* Component */
import Label from '../components/Label'

export default {
  title: 'UI/Components/Label',
  component: Label,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Label>

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Labels = Template.bind({})
Labels.args = {
  children: 'Hello World',
}
