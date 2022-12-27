import React from 'react';
import { connect } from 'react-redux'
import Grid from '@mui/material/Unstable_Grid2';

const Home = () => {
	return (
		<>
		<Grid container>
			<Grid xs={12}>ini home</Grid>
		</Grid>
		</>
	)
}
function mapState(state) {
  return {
		general: state.general
  }
}
export default connect(mapState,null)(Home)
