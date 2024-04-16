import React, { useState, useEffect } from 'react';
import { Dialog as MuiDialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Slide, DialogProps as MuiDialogProps } from '@mui/material';
import Draggable from 'react-draggable';
import { DraggableEventHandler } from 'react-draggable';

export interface DialogProps {
    /**
     * The title of the dialog.
     */
    title: string;

    /**
     * The content text of the dialog.
     */
    content: string;

    /**
     * The label text for the primary button.
     */
    primaryButtonText: string;

    /**
     * The label text for the secondary button.
     */
    secondaryButtonText: string;

    /**
     * Determines whether the dialog should slide in.
     */
    slideIn?: boolean;

    /**
     * Determines whether the dialog should be displayed in full screen.
     */
    openFullScreen?: boolean;

    /**
     * Determines the maximum width of the dialog.
     */
    openMaxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

    /**
     * Determines whether the dialog is draggable.
     */
    draggable?: boolean;

    /**
     * Determines the initial open state of the dialog.
     */
    openProp?: boolean;
}

const Dialog: React.FC<DialogProps & MuiDialogProps> = ({
    title,
    content,
    primaryButtonText,
    secondaryButtonText,
    slideIn = false,
    openFullScreen = false,
    openMaxWidth,
    draggable = false,
    openProp,
    ...props
}) => {
    // State to manage the open state of the dialog
    const [open, setOpen] = useState(openProp ?? false);
    const [maxWidth, setMaxWidth] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm');

    // Effect to update the maximum width of the dialog
    useEffect(() => {
        if (openMaxWidth) {
            setMaxWidth(openMaxWidth);
        }
    }, [openMaxWidth]);


    // Function to handle opening the dialog
    const handleOpen = () => {
        setOpen(true);
    };

    // Function to handle closing the dialog
    const handleClose = () => {
        setOpen(false);
    };


    // Function to handle dragging of the dialog
    const handleDrag: DraggableEventHandler = (e, ui) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const dialogProps: MuiDialogProps = {
        ...props,
        open: open,
        onClose: handleClose,
        fullScreen: openFullScreen,
        maxWidth: maxWidth,
    };


    const getWidth = (maxWidth: string) => {
        switch (maxWidth) {
            case 'xs':
                return 200;
            case 'sm':
                return 400;
            case 'md':
                return 600;
            case 'md':
                return 800;
            case 'md':
                return 1000;
            default:
                return 'auto';
        }
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                {title}
            </Button>
            {draggable ? (
                <Draggable handle="#draggable-dialog-title" onDrag={handleDrag}>
                    <MuiDialog {...dialogProps} TransitionComponent={slideIn ? Slide : undefined}>
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            Dialog title
                        </DialogTitle>
                        <DialogContent>
                            <Typography>{content}</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                {secondaryButtonText}
                            </Button>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                {primaryButtonText}
                            </Button>
                        </DialogActions>
                    </MuiDialog>
                </Draggable>
            ) : (
                <MuiDialog {...dialogProps} TransitionComponent={slideIn ? Slide : undefined} sx={{ width: getWidth(maxWidth) }}>
                    <DialogTitle>Dialog title</DialogTitle>
                    <DialogContent>
                        <Typography>{content}</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            {secondaryButtonText}
                        </Button>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            {primaryButtonText}
                        </Button>
                    </DialogActions>
                </MuiDialog>
            )}
        </div>
    );
};

export default Dialog;
