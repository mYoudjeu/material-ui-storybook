import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

type Props = {
  /**
   * The options will not close after selecting an option
   */
  disableCloseOnSelect?: boolean;

  /**
   * Clear the input field when the ESC button is clicked
   */
  clearOnEscape?: boolean;

  /**
   * Automatically highlights the first option in the list
   */
  autoHighlight?: boolean;

  /**
   * Automatically selects an option that was highlighted when the user Clicks anywhere else on the page
   */
  autoSelect?: boolean;

  /**
   * Disables autocomplete
   */
  disabled?: boolean;

  /**
  * Disables the input of the autoComplete
  */
  readOnly?: boolean;

  /**
  * Basic or default autoComplete
  */
  autoComplete?: boolean;

  /**
  * Basic or default autoComplete
  */
  autoCompleteWithIcon?: boolean;

}

const Departments = [
  { title: 'Finance', employeesNumber: 12 },
  { title: 'HR', employeesNumber: 10 }
]

const defaultProps = {
  /**
   * Options of the autoComplete
   */
  options: Departments,
  getOptionLabel: (option: DepartmentType) => option.title,


}

interface DepartmentType {
  title: string;
  employeesNumber: number;
}


const AutoComplete = ({ autoCompleteWithIcon = false, disableCloseOnSelect = false, disabled = false, readOnly = false, clearOnEscape = false, autoHighlight = false, autoSelect = false, autoComplete = false }: Props) => {
  const theme = useTheme();
  const [isOptionSelected, setIsOptionSelected] = useState<boolean | null>(null);

  // Define custom styles based on the current theme mode
  const baseTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const darkTheme = createTheme({
    ...baseTheme,
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: 'black', // Set text color to black in dark mode
          },
        },
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            color: 'black', // Set text color to black in light mode
          },
        },
      },
    },

  });


  const currentTheme = theme.palette.mode === 'dark' ? darkTheme : lightTheme;


  const handleOptionSelect = (option: DepartmentType | null) => {
    if (option) {
      setIsOptionSelected(true);
    } else {
      setIsOptionSelected(false);
    }
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        {autoCompleteWithIcon && <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
          {isOptionSelected !== null && (
            <>
              {isOptionSelected ? (
                <CheckCircleIcon style={{ color: 'green' }} />
              ) : (
                <CancelIcon style={{ color: 'red' }} />
              )}
            </>
          )}
        </div>}

        {autoComplete ?
          (<Autocomplete
            {...defaultProps}
            id="auto-complete"
            autoComplete
            includeInputInList
            onChange={(event, value) => handleOptionSelect(value)}
            renderInput={(params) => (
              <TextField {...params} label="autoComplete" variant="standard" />
            )}
          />) :
          disableCloseOnSelect ?
            (<Autocomplete
              {...defaultProps}
              id="disable-close-on-select"
              onChange={(event, value) => handleOptionSelect(value)}
              renderInput={(params) => (
                <TextField {...params} label="disableCloseOnSelect" variant="standard" />
              )}
            />) : disabled ? (
              <Autocomplete
                {...defaultProps}
                id="disabled"
                disabled
                renderInput={(params) => (
                  <TextField {...params} label="disabled" variant="standard" />
                )}
              />) : readOnly ? (
                <Autocomplete
                  {...defaultProps}
                  id="readOnly"
                  readOnly
                  renderInput={(params) => (
                    <TextField {...params} label="readOnly" variant="standard" />
                  )}
                />) :
              clearOnEscape ? (
                <Autocomplete
                  {...defaultProps}
                  id="clear-on-escape"
                  clearOnEscape
                  onChange={(event, value) => handleOptionSelect(value)}
                  renderInput={(params) => (
                    <TextField {...params} label="clearOnEscape" variant="standard" />
                  )}
                />
              ) :
                autoHighlight ? (
                  <Autocomplete
                    {...defaultProps}
                    id="auto-highlight"
                    onChange={(event, value) => handleOptionSelect(value)}
                    autoHighlight
                    renderInput={(params) => (
                      <TextField {...params} label="autoHighlight" variant="standard" />
                    )}
                  />
                ) :
                  autoSelect && (
                    <Autocomplete
                      {...defaultProps}
                      id="auto-select"
                      onChange={(event, value) => handleOptionSelect(value)}
                      autoSelect
                      renderInput={(params) => (
                        <TextField {...params} label="autoSelect" variant="standard" />
                      )}
                    />
                  )


        }
      </ThemeProvider>
    </>
  )
}


export default AutoComplete