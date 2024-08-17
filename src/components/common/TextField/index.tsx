import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
interface TextFieldProps {
    value: any;
    label: string;
    onChangeCallback: (event: React.ChangeEvent<HTMLInputElement>) => void;
    [key: string]: any;
    placeholder?: string;
    disable?: boolean;
    multiline?: boolean;
    name: string;
}

const TextField: React.FC<TextFieldProps> = ({ label, name, onChangeCallback, value, placeholder, disable, multiline, ...props }) => {
    return (
        <MuiTextField
            sx={{ width: "100%", margin: "5px 0" }}
            id="outlined-basic"
            variant="outlined"
            color="info"
            focused
            placeholder={placeholder}
            disabled={disable}
            label={label}
            name={name}
            value={value}
            onChange={onChangeCallback}
            multiline={multiline}
            rows={3}
        />
    );
};

export default TextField;
