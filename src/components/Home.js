/** @format */
//******************************************************************************
// Home.js
// Home page function that holds other page functions and is loaded from
// app.js
//
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setWindowWidth, setWindowHeight, setLoading } from "../actions/index";

import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import Exercise from "./Exercise";
import ExerciseSelection from "./ExerciseSelection";
import Stats from "./Stats";
import Friends from "./Friends";

const styleClasses = () => ({
  root: {
    display: "flex",
  },
  box: {
    width: "100px",
    height: "100px",
    borderStyle: "solid",
    borderWidth: "2px 2px 2px 2px",
    backgroundColor: "blue",
  },
  drawer: {
    openWidth: 240,
    closedWidth: 58,
  },
  topBar: {
    height: 64,
  },
});

const drawerOpenWidth = 240;
const drawerClosedWidth = 58;

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = { drawerOpen: false }
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
	}

	componentDidMount() {
		this.updateWindowDimensions()
		window.addEventListener('resize', this.updateWindowDimensions)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions)
	}

	updateWindowDimensions() {
		if (this.state.drawerOpen) this.props.setWindowWidth(window.innerWidth - drawerOpenWidth)
		else this.props.setWindowWidth(window.innerWidth - drawerClosedWidth)

		this.props.setWindowHeight(window.innerHeight - 64)
	}

	toggleDrawer = open => {
		this.setState({ drawerOpen: open })
		this.updateWindowDimensions()
	}

	render() {
		return (
			<div>
				{!this.props.auth && <Redirect to="/" />}
				<TopNavbar
					logout={this.props.logout}
					drawerOpen={this.state.drawerOpen}
					setDrawerOpen={this.toggleDrawer}
				/>
				<div className={styleClasses.root}>
					<Navbar drawerOpen={this.state.drawerOpen} setDrawerOpen={this.toggleDrawer} />
					<div
						width={this.props.window.width}
						height={this.props.window.height}
						style={{
							marginLeft: this.state.drawerOpen ? drawerOpenWidth : drawerClosedWidth,
						}}
					>
						<Route path="/app/new">
							<h1>Hello, World</h1>
						</Route>
                        <Route path="/app/exercise">
                            <Exercise />
                        </Route>
						<Route path="/app/exerciseselection">
							<ExerciseSelection />
						</Route>
						<Route path="/app/stats">
							<Stats />
						</Route>
						<Route path="/app/friends">
							<Friends />
						</Route>
					</div>
				</div>
			</div>
		)
	}
}
//******************************************************************************
// Redux Incoming Variables Function
function mapStateToProps(state) {
  return {
    user: state.user,
    window: state.window,
  };
}
//******************************************************************************
// Redux Outgoing Variables Function
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setWindowWidth: setWindowWidth,
      setWindowHeight: setWindowHeight,
      setLoading: setLoading,
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
