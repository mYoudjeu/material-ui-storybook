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
    const [open, setOpen] = useState(openProp ?? false);
    const [maxWidth, setMaxWidth] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm');

    useEffect(() => {
        if (openMaxWidth) {
            setMaxWidth(openMaxWidth);
        }
    }, [openMaxWidth]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                <MuiDialog {...dialogProps} TransitionComponent={slideIn ? Slide : undefined}>
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
