/** @format */

import React, { Component } from 'react'
import {
    createMuiTheme,
    MuiThemeProvider,
    CssBaseline,
    Backdrop,
    CircularProgress
  } from '@material-ui/core'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import './App.css'
import { setUser, setLoading, setExerciseString, setExerciseId, fetchStats, fetchFriends } from './actions/index'
import Login from './components/Login'
import Home from './components/Home'
import RegisterConfirmation from './components/RegisterConfirmation'
import RegisterForm from './components/RegisterForm'

import { exercises } from './utils/words';

// color theme definition: light
const light = createMuiTheme({
    palette: {
      primary: {
        main: '#c19a23',
        contrastText: '#fff'
      },
      drawer: {
        main: '#d9d9d9',
        text: '#fff',
        icons: '#000'
      },
      secondary: { main: '#000' },
      error: { main: '#c19a23' }
    }
  })
  
  // color theme definition: dark
  const dark = createMuiTheme({
    palette: {
      primary: {
        main: '#c19a23',
        contrastText: '#fff'
      },
      drawer: {
        main: '#222',
        text: '#fff',
        icons: '#fff'
      },
      secondary: { main: '#fff' },
      error: { main: '#c19a23' },
      type: 'dark'
    }
  })
  
  // add themes to a js object
  const themes = { dark: dark, light: light }
  
  // this component's styles
  const styleClasses = theme => ({
    root: {
      display: 'flex'
    },
    center: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })


  //App class that starts the front end
class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        auth: false
      }
    }
  
    componentDidMount() {
      this.props.setExerciseString(exercises[1].words)
      this.props.setExerciseId(exercises[1].id)
      //let token = localStorage.getItem('token')
      let token = 'fakeToken'
      if (token) {
        axios
          .put('http://localhost:8080/api/users/token', {
            token
          })
          .then(res => {
            localStorage.setItem('token', res.data)
            //this.setState({ auth: true, userData: jwtDecode(res.data) })
            this.setState({ auth: true, userData: res.data })
            //var temp = jwtDecode(res.data)
            var temp = res.data
            console.log("decoded data: ", temp)
            this.props.setUser({
              id: temp.id,
              name: temp.name,
              email: temp.email
            })
            this.props.fetchStats(this.props.user._id)
            this.props.fetchFriends(this.props.user._id)
          })
          .catch()
      }
    }
  
    tryLogin = async (email, password) => {
      try {
        this.setState.loading = true
        const { data } = await axios.post(
          'http://localhost:8080/api/users/token',
          {
            email,
            password
          }
        )
        localStorage.setItem('token', data)
        this.setState({ loading: false, auth: true })
        //this.props.setUser(jwtDecode(data))
        this.props.setUser(data)
        this.props.fetchStats(this.props.user._id)
        this.props.fetchFriends(this.props.user._id)
        return true
      } catch (err) {
        this.setState.loading = false
        return false
      }
    }
  
    createUser = async (name, email, password, skillQuestion) => {
      try {
        this.setState.loading = true
        const { data } = await axios.post(
          'http://localhost:8080/api/users',
          {
            name,
            email,
            password,
            skillQuestion
          }
        )
        localStorage.setItem('token', data)
        this.setState.auth = true
        this.props.setLoading(false)
        return true
      } catch (err) {
        this.setState.loading = false
        return false
      }
    }
  
    logout = () => {
      localStorage.removeItem('token')
      this.setState({ auth: false, userData: null })
    }
  
    render() {
      return (
        <MuiThemeProvider theme={themes[this.props.colorTheme]}>
          <Backdrop style={{ zIndex: 2000 }} open={this.props.loading}>
            <CircularProgress color='inherit' />
          </Backdrop>
          <CssBaseline />
          <div className={styleClasses.root}>
            <Router>
              {this.state.auth && <Redirect to='/app' />}
              <Route path='/app'>
                <Home logout={this.logout} auth={this.state.auth} />
              </Route>
              <Route exact path='/'>
                <Login
                  className={styleClasses.center}
                  tryLogin={this.tryLogin}
                />
              </Route>
              <Route exact path='/register'>
                <RegisterForm createUser={this.createUser} />
              </Route>
              <Route exact path='/register/confirm'>
                <RegisterConfirmation></RegisterConfirmation>
              </Route>
            </Router>
          </div>
        </MuiThemeProvider>
      )
    }
  }
  
  //******************************************************************************
  // Redux Incoming Variables Function
  function mapStateToProps(state) {
    return {
      loading: state.loading,
      colorTheme: state.colorTheme,
      user: state.user,
    }
  }
  
  //******************************************************************************
  // Redux Outgoing Variables Function
  function matchDispatchToProps(dispatch) {
    return bindActionCreators(
      { setUser: setUser, 
        setLoading: setLoading, 
        setExerciseString: setExerciseString,
        setExerciseId: setExerciseId,
        fetchStats: fetchStats,
        fetchFriends: fetchFriends },
      dispatch
    )
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(App)