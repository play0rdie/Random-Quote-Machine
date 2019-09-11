import React from 'react';
import { Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

export const TweetQuote = ({ color }) => {
    return (
        <Button href='twitter.com/intent/tweet' id='tweet-quote' component='a'>
            <TwitterIcon htmlColor={color}/>
        </Button>
    )
}