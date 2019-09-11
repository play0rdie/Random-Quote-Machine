import React, { useState } from 'react';
import { QuoteText } from './QuoteText';
import { QuoteAuthor } from './QuoteAuthor';
import { NewQuote } from './NewQuote';
import { TweetQuote } from './TweetQuote';
import { Paper } from '@material-ui/core/';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { quotes } from '../quotes';

const useStyles = makeStyles({
	paper: {
		padding: 30,
		width: '50%'
	}
});

const getRand = () => {
	let rand = Math.random() * (quotes.length + 1);
	return Math.floor(rand);
  }

export const QuoteBox = ({ color, setColor }) => {
	const classes = useStyles();
	const [quote, setQuote] = useState(quotes[getRand()]);
	const binded = () => {
		return setQuote(quotes[getRand()]);
	}

	return (
		<Paper className={classes.paper} style={{color: `${color}`}} id='quote-box'>
			<QuoteText text={quote.quote} />
			<QuoteAuthor author={quote.author} />
			<Grid container direction='row' justify='space-around'>
				<Grid item xs style={{textAlign: 'center'}}>
					<TweetQuote color={color}/>
				</Grid>
				<Grid item xs style={{textAlign: 'center'}}>
					<NewQuote color={color} setColor={setColor} setQuote={binded}/>
				</Grid>
			</Grid>
		</Paper>
	);
};