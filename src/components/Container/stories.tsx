import { Story, Meta } from '@storybook/react/types-6-0'

import Container from '.'

export default {
  title: 'Container',
  component: Container
} as Meta

const Template: Story = ({ children }) => <Container>{children}</Container>

export const Basic = Template.bind({})
Basic.args = {
  children: <p>Some text in the container</p>
}
