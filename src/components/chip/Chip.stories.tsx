import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import TagFacesIcon from '@mui/icons-material/TagFaces'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import type { Meta, StoryFn } from '@storybook/react'
import React from 'react'

import Chip from './Chip'

export default {
    title: 'Components/Chip',
    tags: ['autodocs'],
    component: Chip,
} as Meta<typeof Chip>

export const Default: StoryFn<typeof Chip> = (props) => (
    <Chip {...props} />
)
const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}))

export const BasicChip = () => {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ])

    const handleDelete = (chipToDelete: { key: any; label?: string }) => () => {
        setChipData((chips) =>
            chips.filter((chip) => chip.key !== chipToDelete.key)
        )
    }
    const handleClick = () => {
        alert('You clicked the Chip.')
    }
    const handleDeleteIcon = () => {
        alert('You clicked the delete icon.')
    }


    return (
        <div>
            <Stack direction="row" spacing={1}>
                <Chip label="Chip Filled" />
                <Chip label="Chip Outlined" variant="outlined" />
            </Stack>

            <Stack spacing={1} alignItems="center">
                <Stack direction="row" spacing={1}>
                    <Chip label="primary" color="primary" />
                    <Chip label="success" color="success" />
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Chip label="primary" color="primary" variant="outlined" />
                    <Chip label="success" color="success" variant="outlined" />
                </Stack>
            </Stack>

            <Stack direction="row" spacing={1}>
                {/* @ts-ignore */}
                <Chip label="Clickable" onClick={handleClick} />
                {/* @ts-ignore */}
                <Chip label="Clickable" variant="outlined" onClick={handleClick} />
            </Stack>

            <Stack direction="row" spacing={1}>
                {/* @ts-ignore */}
                <Chip label="Deletable" onDelete={handleDeleteIcon} />
                {/* @ts-ignore */}
                <Chip label="Deletable" variant="outlined" onDelete={handleDeleteIcon} />
            </Stack>
            <Stack direction="row" spacing={1}>
                {/* @ts-ignore TS2322: Type '{ label: string; component: string; href: string; clickable: true; }' is not assignable to type 'IntrinsicAttributes & { avatar?: ReactElement<any, string | JSXElementConstructor<any>>; children?: null; classes?: Partial<...>; ... 9 more ...; variant?: "outlined" | "filled"; } & CommonProps & Omit<...> & { ...; }'. */}
                <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
                <Chip
                    label="Clickable Link"
                    /* @ts-ignore TS2322: Type '{ label: string; component: string; href: string; clickable: true; }' is not assignable to type 'IntrinsicAttributes & { avatar?: ReactElement<any, string | JSXElementConstructor<any>>; children?: null; classes?: Partial<...>; ... 9 more ...; variant?: "outlined" | "filled"; } & CommonProps & Omit<...> & { ...; }'. */
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickabe
                />
            </Stack>

            <Stack direction="row" spacing={1}>
                <Chip
                    label="Custom delete icon"
                    /* @ts-ignore */
                    onClick={handleClick}
                    onDelete={handleDeleteIcon}
                    deleteIcon={<DoneIcon />}
                />
                <Chip
                    label="Custom delete icon"
                    /* @ts-ignore */
                    onClick={handleClick}
                    onDelete={handleDeleteIcon}
                    deleteIcon={<DeleteIcon />}
                    variant="outlined"
                />
            </Stack>
            <Stack direction="row" spacing={1}>
                <Chip label="Small" size="small" />
                <Chip label="Small" size="small" variant="outlined" />
            </Stack>

            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                }}
                component="ul"
            >
                {chipData.map((data) => {
                    let icon

                    if (data.label === 'React') {
                        icon = <TagFacesIcon />
                    }

                    return (
                        <ListItem key={data.key}>
                            <Chip
                                /* @ts-ignore */
                                icon={icon}
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                            />
                        </ListItem>
                    )
                })}
            </Paper>
        </div>
    )
}





