import React from 'react'
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  /**
   * accepts four values representing different states with corresponding icon and color combinations for each
   */
  severity?: 'success' | 'info' | 'warning' | 'error';

  /**
   * accepts two values which sets the background color of the component
   */
  variant?: 'filled' | 'outlined';

  /**
   * to set the alert's text
   */
  label?: string;

  /**
   * Define if we want to set an icon or not
   */
  icon?: boolean;
  /**
   * To set the text for the button
   */
  actionButtonLabel?: string;
  /**
   * To set the title of the alert
   */
  alertTitle?: string
  /**
   * use Collapse Transition components to add motion to an Alert's entrance and exit.
   */
  transAlert?: boolean

  soundAlert?: boolean
}

const AlertComponent = ({ severity = 'success', variant = 'filled', label, icon = false, actionButtonLabel, alertTitle, transAlert = false, soundAlert = false }: Props) => {
  const [open, setOpen] = React.useState(true);

  const playTransitionSound = () => {
    const audio = new Audio(process.env.PUBLIC_URL + '/sounds/errorSound.mp3');
    audio.play();
  };

  // Handle opening and closing of the alert
  const handleAlertToggle = () => {
    setOpen(true);
    if (open) {
      playTransitionSound();
    }
  };


  return (
    <>
      {transAlert ? (
        <Box sx={{ width: '100%' }}>
          <Collapse in={open}>
            <Alert
              variant={variant}
              severity={severity}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <AlertTitle>{alertTitle}</AlertTitle>
              {label}
            </Alert>
          </Collapse>
          <Button
            disabled={open}
            variant="outlined"
            onClick={() => {
              setOpen(true);
            }}
          >
            Re-open
          </Button>
        </Box>
      ) : icon ? (
        <Alert
          icon={icon}
          variant={variant}
          severity={severity}
          sx={{ marginBottom: '12px' }}
        >
          <AlertTitle>{alertTitle}</AlertTitle>
          {label}
        </Alert>
      ) : soundAlert ? (
        <Box sx={{ width: '100%' }}>
          <Collapse in={open} onEntered={playTransitionSound} onExited={playTransitionSound}>
            <Alert
              variant={variant}
              severity={severity}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              <AlertTitle>{alertTitle}</AlertTitle>
              {label}
            </Alert>
          </Collapse>
          <Button
            disabled={open}
            variant="outlined"
            onClick={handleAlertToggle}
          >
            Re-open
          </Button>
        </Box>

      ) : (
        <Alert
          severity={severity}
          variant={variant}
          action={
            <Button color="inherit" size="small">
              {actionButtonLabel}
            </Button>
          }
          sx={{ marginBottom: '12px' }}
        >
          <AlertTitle>{alertTitle}</AlertTitle>
          {label}
        </Alert>
      )}
    </>


  )
}

export default AlertComponent