// Snackbar.tsx
import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

export interface SnackbarProps {
  buttonTitle?: string;
  anchorOrigin?: SnackbarOrigin;
  variant?: boolean;
  variantType?: 'error | warning | success '

}

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');

  };

  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });

  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant('warning')}>Show success snackbar</Button>
    </React.Fragment>
  );
}

const CustomSnackbar: React.FC<SnackbarProps> = ({ buttonTitle, anchorOrigin, variant }) => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {!variant ? (
        <SnackbarProvider>
          <Button onClick={handleClick}>{buttonTitle}</Button>
          <Snackbar
            anchorOrigin={anchorOrigin}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message='I love snacks'
          />
        </SnackbarProvider>
      ) : (
        <React.Fragment>
          <SnackbarProvider >
            <MyApp />
          </SnackbarProvider>
        </React.Fragment>
      )}

    </>
  );
};


export default CustomSnackbar;
