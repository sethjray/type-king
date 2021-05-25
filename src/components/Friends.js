/** @format */
//******************************************************************************
// Stats.js
// Stats page component that shows statistics and achievements and achievements
//
//

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchFriends, addFriend } from '../actions/index'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      minWidth: 275,
      maxWidth: 500,
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

//******************************************************************************
// Stats Component
// File(s) Used: Home.js
export default connect(
    mapStateToProps,
    matchDispatchToProps
)(function Friends(props) {
    const classes = useStyles();
    const[values, setValues] = React.useState({
        email: ''
    })

    const onSubmit = (e) => {
		e.preventDefault()
		setValues({ ...values })
        props.addFriend(props.user._id, values.email)
	}

    const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value })
	}

  return (
      <Grid container direction="column" justify="center" alignItems="center" >
      {Array.from(props.friends).map((friend) => {
          return (
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {friend._id}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    {friend.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    Achievements
                    </Typography>
                    <Typography variant="body2" component="p">
                    All The Words: {friend.statistics.achievements.allTheWords.toString()}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Triple Digit Club: {friend.statistics.achievements.tripleDigitClub.toString()}
                    </Typography>
                    <Typography variant="body2" component="p">
                    A+ Accuracy: {friend.statistics.achievements.aPlusAccuracy.toString()}
                    </Typography>
                    <Typography variant="body2" component="p">
                    Best Friends Forever: {friend.statistics.achievements.bestFriendsForever.toString()}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Remove Friend</Button>
                </CardActions>
            </Card>
          )
      })}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField name="email" 
                   label="Friend's Email" 
                   variant="outlined" 
                   value={values.email}
                   onChange={handleChange('email')}/>
        <Button variant="contained"
                color="primary"
                type="submit"
                onClick={onSubmit}
        >Add Friend</Button>
      </form>
      
    </Grid>
  );
})

//******************************************************************************
// Redux Incoming Variables Function
function mapStateToProps(state) {
	return {
		user: state.user,
		window: state.window,
        friends: state.friends,
        theme: state.theme
	}
}

//******************************************************************************
// Redux Outgoing Variables Function
function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
            fetchFriends: fetchFriends,
            addFriend: addFriend,
		},
		dispatch
	)
}
