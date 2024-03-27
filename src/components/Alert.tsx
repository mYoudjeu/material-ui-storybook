import React from 'react'
import Alert from '@mui/material/Alert';

type Props = {
    /**
     * accepts four values representing different states with corresponding icon and color combinations for each
     */
    severity?: 'success' | 'info' | 'warning' | 'error';

    /**
     * accepts two values which sets the background color of the component
     */
    variant?: 'filled' | 'outlined';
}

const AlertComponent = ({ severity = 'success', variant = 'filled' }: Props) => {
    return (
        <Alert severity={severity} variant={variant} > This alert is an alert  </Alert>
    )
}

export default AlertComponent