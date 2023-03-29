import { Story, Meta } from '@storybook/react/types-6-0'

import ALink from '.'

export default {
  title: 'ALink',
  component: ALink
} as Meta

interface ALinkProps {
  href: string
  children: React.ReactNode
}

const Template: Story<ALinkProps> = ({ href, children, ...args }) => (
  <ALink href={href} {...args}>
    {children}
  </ALink>
)

export const Basic = Template.bind({})
Basic.args = {
  href: 'https://example.com',
  children: 'Click me'
}
