import React from 'react'
import { Button as MatButton } from '@mui/material'

interface ButtonProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Variants of the button
     */
    variant: 'text' | 'contained' | 'outlined';
    /**
    * Determine if the button is enabled or not
    */
    isDisabled: boolean
}

type Props = {}

const Button = ({ backgroundColor, label = 'hello', size = 'medium', variant = 'contained', isDisabled = false }: ButtonProps) => {
    return (
        <MatButton variant={variant} size={size} disabled={isDisabled} sx={{ backgroundColor: { backgroundColor } }}> {label} </MatButton >
    )
}

export default Button