import React from 'react'
import Skeleton from '@mui/material/Skeleton';

type Props = {

    /**
     * Comes with different border radius to let you take control of the size.
     */
    variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
}

const SkeletonComponent = ({ variant = 'text' }: Props) => {
    return (
        <Skeleton variant={variant} sx={{ fontSize: '1rem' }} />
    )
}

export default SkeletonComponent