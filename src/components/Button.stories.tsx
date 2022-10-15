import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create a account',
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}