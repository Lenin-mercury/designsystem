import React from 'react';
import { StyleRules, Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/styles';
import { FormControl, Radio, RadioGroup,FormControlLabel,   } from '@material-ui/core';

interface data {
    label:string;
    value:string;
}

interface radioIcon{
    checkedIcon: string;
    uncheckedIcon: string;
}

export interface RadioButtonProps {
    data? :data[]
}

const Radio = () => {
    return (
        <div>

        </div>
    );
};

export default Radio;