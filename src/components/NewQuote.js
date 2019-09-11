import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const NewQuote = ({ setQuote, setColor, color }) => {
    const useStyles = makeStyles({
        newQuote: {
            color: color,
            border: `1px solid ${color}`
        }
    });
    const styles = useStyles();
    const handleClick = () => {
        setColor();
        setQuote();
    }

    return (
        <Button id='new-quote' variant='outlined' className={styles.newQuote} onClick={handleClick}>
            New quote
        </Button>
    )
}