/** @format */
//******************************************************************************
// Stats.js
// Stats page component that shows statistics and achievements and achievements
//
//

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
import { bindActionCreators } from 'redux'
import { setTheme, fetchStats } from '../actions/index'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	link: {
		color: theme.palette.secondary.main,
		textDecoration: 'underline',
	},
}))

//******************************************************************************
// Stats Component
// File(s) Used: Home.js
export default connect(
    mapStateToProps,
    matchDispatchToProps
)(function Stats(props) {

    const classes = useStyles()
	if (!props.statistics) {
		return <p></p>
	}

    var timestamp = props.user._id.toString().substring(0, 8)
	var date = new Date(parseInt(timestamp, 16) * 1000)
	return (
		<main className={classes.root}>
			<Grid
				style={{
					height: props.window.height,
					textAlign: 'center',
				}}
				direction="column"
				justify="center"
				alignItems="center"
				container
			>
				<Grid item>
					<Typography variant="h5" gutterBottom>
						Hello {props.user.name || 'null'}, these are your statistics and achievements!
					</Typography>
				</Grid>
				<Grid item>
					<Typography gutterBottom>Member Since: {date.toString() || 'null'}</Typography>
					<Typography gutterBottom>Email: {props.user.email || 'null'}</Typography>
                    <Typography variant="h5" gutterBottom>
                        STATISTICS
					</Typography>
					<Typography gutterBottom>
						Total Words Typed: {props.statistics.globalStats.wordsTyped || 'null'}
					</Typography>
					<Typography gutterBottom>
						Fastest Words Per Minute: {props.statistics.globalStats.fastestWPM  || 'null'}
					</Typography>
					<Typography gutterBottom>
						Average Typing Accuracy: {props.statistics.globalStats.averageAcc  || 'null'}
					</Typography>
                    <Typography variant="h5" gutterBottom>
						ACHIEVEMENTS
					</Typography>
                    <Typography gutterBottom>
						All The Words: {props.statistics.achievements.allTheWords.toString() || 'null'}
					</Typography>
                    <Typography gutterBottom>
						Triple Digit Club: {props.statistics.achievements.tripleDigitClub.toString() || 'null'}
					</Typography>
                    <Typography gutterBottom>
						A+ Accuracy: {props.statistics.achievements.aPlusAccuracy.toString() || 'null'}
					</Typography>
                    <Typography gutterBottom>
						Best Friends Forever!: false
					</Typography>
					{/* <Typography gutterBottom>Website Theme</Typography>
					<Button onClick={handleDark} variant="contained" color="default" dataTestId="darkModeButton">
						Dark
					</Button>
					<Button onClick={handleLight} variant="contained" color="default" dataTestId="lightModeButton">
						Light
					</Button> */}
				</Grid>
			</Grid>
		</main>
	)
})

//******************************************************************************
// Redux Incoming Variables Function
function mapStateToProps(state) {
	return {
		user: state.user,
		window: state.window,
        statistics: state.statistics,
	}
}

//******************************************************************************
// Redux Outgoing Variables Function
function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
            fetchStats: fetchStats
		},
		dispatch
	)
}
