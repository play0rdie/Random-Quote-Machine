import React from 'react';
import { Grid } from '@material-ui/core/';

export const Layout = ({ color, children }) => {
	return (
		<Grid container direction='row' justify='center' alignItems='center' style={{minHeight: '100vh', backgroundColor: `${color}`}}>
			{ children }
		</Grid>
	);
};