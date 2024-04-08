import React, { useState } from 'react';
import { Button as MatButton, CircularProgress } from '@mui/material';

export interface ButtonProps {
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
    isDisabled?: boolean;
}

const Button = ({
    backgroundColor,
    label = 'hello',
    size = 'medium',
    variant = 'contained',
    isDisabled = false,
}: ButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true); // Set loading state to true when button is clicked

    };

    return (
        <MatButton
            variant={variant}
            size={size}
            disabled={isDisabled || isLoading} // Disable button if it's disabled or loading
            sx={{ backgroundColor: { backgroundColor } }}
            onClick={handleClick} // Call handleClick when the button is clicked
        >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : label} {/* Show loader if isLoading is true */}
        </MatButton>
    );
};

export default Button;
