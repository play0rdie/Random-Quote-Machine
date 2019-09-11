import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    quoteAuthor: {
        margin: '20px 0',
        textAlign: 'right'
    }
})

export const QuoteAuthor = ({ author }) => {
    const classes = useStyles();

    return (
        <div className={classes.quoteAuthor}>
            <Typography variant='subtitle1' id='author'>
                - {author}
            </Typography>
        </div>
    )
}