import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '../components/Checkbox'
import { useState } from 'react'

const Meta = {
  title: 'Checkbox',
  component: function Component(props) {
    const [checked, setChecked] = useState(props.checked)
    return <Checkbox {...props} checked={checked} onChange={setChecked} />
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Checkbox>

export default Meta
type Story = StoryObj<typeof Meta>

export const Default: Story = {
  args: {
    checked: false,
    children: 'Default checkbox',
  },
}
