import React, { useState } from 'react';
import { pink } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { RadioProps } from '@mui/material/Radio';

interface RadioButtonProps {
    /**
   * To set the type of the radioButton
   */
    type: 'group' | 'row-group' | 'controlled-group' | 'individual' | 'size' | 'color' | 'error' | 'placement' | 'label-placement';
    /**
   * To set the Label of the RadioButton
   */
    label?: string;
    row?: boolean;
    options?: string[];
}

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
    return (
        <Radio
            sx={{
                '&:hover': {
                    bgcolor: 'transparent',
                },
            }}
            disableRipple
            color="default"
            {...props}
        />
    );
}

const RadioButton: React.FC<RadioButtonProps> = ({
    type,
    label,
    row,
    options = [],
}) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('Choose wisely');
    const [selectedValue, setSelectedValue] = useState<string>(
        options.length > 0 ? options[0] : ''
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const controlProps = (item: string) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (value === 'Best') {
            setHelperText('You got it!');
            setError(false);
        } else if (value === 'Worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };



    const renderRadioButtons = () => {
        switch (type) {
            case 'group':
                return options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio />}
                        label={option}
                    />
                ));
            case 'row-group':
                return options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio />}
                        label={option}
                    />
                ));
            case 'controlled-group':
                return options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio />}
                        label={option}
                    />
                ));
            case 'individual':
                return options.map((option, index) => (
                    <Radio key={index} {...controlProps(option)} />
                ));
            case 'size':
                return options.map((option, index) => (
                    <Radio
                        key={index}
                        {...controlProps(option)}
                        size={option === 'Small' ? 'small' : 'medium'}
                    />
                ));
            case 'color':
                return options.map((option, index) => (
                    <Radio
                        key={index}
                        {...controlProps(option)}
                        color={option === 'Pink' ? 'default' : (option.toLowerCase() as 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | 'default')}
                        sx={option === 'Pink' ? { color: pink[800] } : {}}
                    />
                ));
            case 'error':

                return options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio />}
                        label={option}
                    />
                ));
            case 'placement':
                return options.map((option, index) => (
                    <FormControlLabel
                        value={option}
                        key={index}
                        control={<Radio />}
                        label={option}
                        labelPlacement={
                            option === 'End' ? 'end' :
                                option === 'Top' ? 'top' :
                                    option === 'Start' ? 'start' :
                                        option === 'Bottom' ? 'bottom' :
                                            undefined
                        }
                    />

                ));
            case 'label-placement':
                return options.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        value={option}
                        control={<BpRadio />}
                        label={option}
                        labelPlacement={
                            option === 'End' ? 'end' :
                                option === 'Top' ? 'top' :
                                    option === 'Start' ? 'start' :
                                        option === 'Bottom' ? 'bottom' :
                                            undefined
                        }
                    />
                ));
            default:
                return null;
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <FormControl error={error} >
                    <FormLabel>{label}</FormLabel>
                    <RadioGroup
                        row={row}
                        value={value}
                        aria-label={label}
                        name="radio-button-group"
                        onChange={handleRadioChange}
                        defaultValue={options.length > 0 ? options[0] : ''}
                    >
                        {renderRadioButtons()}
                    </RadioGroup>
                    {type === 'error' && (
                        <FormHelperText> {helperText} </FormHelperText>
                    )}
                    {type === 'error' && (
                        <Button type="submit" variant="outlined">
                            Check Answer
                        </Button>
                    )}
                </FormControl>
            </form>

        </div>
    );
};

export default RadioButton;
