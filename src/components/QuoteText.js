import React from 'react';
import { Typography } from '@material-ui/core';
import { Icon } from '@material-ui/core';

import 'typeface-roboto';

export const QuoteText = ({ text }) => {
    return (
        <div>
            <Icon style={{ fontSize: 50 }}>format_quote</Icon>
            <Typography id='text' variant='h3' component='span'>
                {text}
            </Typography>
        </div>
    )
}