import { Story, Meta } from '@storybook/react/types-6-0'

import MyAccount from '.'

export default {
  title: 'MyAccount',
  component: MyAccount
} as Meta

const Template: Story = (args) => <MyAccount {...args} />

export const Basic = Template.bind({})
