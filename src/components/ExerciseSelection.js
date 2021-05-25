/** @format */
//******************************************************************************
// ExerciseSelection.js
// Main page that lets you select multiple exercises
//
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    makeStyles,
    Grid,
    Typography,
    Card,
    CardHeader,
    CardActionArea,
    Divider,
    Tooltip,
  } from "@material-ui/core";
import { exercises } from '../utils/words';
import { setExerciseString, setExerciseId, setLoading } from "../actions/index";

const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
    },
    link: {
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
    field: {
      width: "20vw",
      minWidth: "250px",
    },
    error: {
      color: theme.palette.error.main,
    },
    card: {
      textOverflow: "ellipsis",
      width: 350,
      margin: 10,
      borderRadius: 5,
    },
    selectedCard: {
      textOverflow: "ellipsis",
      width: 350,
      margin: 10,
      boxShadow: "0 0 0 5px #f78d1e",
      borderRadius: 5,
      backgroundColor: "#666",
    },
    cardimage: {
      height: 140,
    },
    cardheader: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      height: 35,
      width: 320,
    },
    deletebutton: {
      "&:hover": {
        color: "#ea4b35",
      },
    },
  }));

export default connect(
    mapStateToProps,
    matchDispatchToProps
)(function ExerciseSelection(props) {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <div style={{ marginTop: 20 }}>
                <Typography style={{ marginLeft: 20, marginBottom: 20 }} variant="h4">
                Select a Exercise, then click the play button in the top left!
                </Typography>
                <Divider />
                <div className={classes.root}>
                    <Grid
                        container
                        spacing = {2}
                        style={{ marginTop: 15 }}
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                    >
                        {exercises.map((exercise) => (
                            <Grid item key={exercises.indexOf(exercise)}>
                                <Card>
                                    <Tooltip title="Select this exercise">
                                        <CardActionArea
                                        dataTestId="selectExercise"
                                        onClick={() => {
                                            props.setExerciseString(exercise.words)
                                            props.setExerciseId(exercise.id)
                                        }}
                                        >
                                        <CardHeader
                                            title={
                                            <Typography
                                                variant="h5"
                                                className={classes.cardheader}
                                            >
                                                {exercise.name}
                                            </Typography>
                                            }
                                        />
                                        </CardActionArea>
                                    </Tooltip>
                                <Divider />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </main>
    )
})

//******************************************************************************
// Redux Incoming Variables Function
function mapStateToProps(state) {
	return {
    exerciseString: state.exerciseString,
	};
}
//******************************************************************************
// Redux Outgoing Variables Function
function matchDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			setLoading: setLoading, 
      setExerciseString: setExerciseString,
      setExerciseId: setExerciseId
		},
		dispatch
	)
}