import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Layout } from './components/Layout';
import { QuoteBox } from './components/QuoteBox';

const getRandomColor = () => {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

export const App = () => {
	const [color, setColor] = useState(getRandomColor);
	const binded = () => {
		return setColor(getRandomColor);
	}

	return (
		<React.Fragment>
			<CssBaseline />
			<Layout color={color}>
				<QuoteBox color={color} setColor={binded}/>
			</Layout>
		</React.Fragment>
	);
};