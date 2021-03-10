/** @format */
//******************************************************************************
// src/actions/index.js
// Holds all the Redux functions that are used to set global Redux variables
//
//

//******************************************************************************
// Set User Redux Function
// File(s) Used: App.js
export const setUser = user => {
    console.log('set user to: ', user)
    return {
      type: 'USER_SET',
      payload: user
    }
  }

  //******************************************************************************
// Set Loading Redux Function
// File(s) Used: App.js, Lorelines.js, Home.js, Directory.js
export const setLoading = isLoading => {
    return {
      type: 'SET_LOADING',
      payload: isLoading
    }
  }
  
  //******************************************************************************
  // Set Theme Redux Function
  // File(s) Used: Account.js
  export const setTheme = theme => {
    return {
      type: 'SET_THEME',
      payload: theme
    }
  }
  
  //******************************************************************************
  // Set Window Width Redux Function
  // File(s) Used: Home.js
  export const setWindowWidth = width => {
    return {
      type: 'SET_WINDOW_WIDTH',
      payload: width
    }
  }
  
  //******************************************************************************
  // Set Window Height Redux Function
  // File(s) Used: Home.js
  export const setWindowHeight = height => {
    return {
      type: 'SET_WINDOW_HEIGHT',
      payload: height
    }
  }

//******************************************************************************
// Set Exercise String Redux Function
// 
// File(s) Used:
export const setExerciseString = exerciseString => {
  console.log('set exercise string to: ', exerciseString)
  return {
    type: 'EXSTRING_CHANGED',
    payload: exerciseString
  }
}

//******************************************************************************
// Set Exercise Id Redux Function
// 
// File(s) Used:
export const setExerciseId = exerciseId => {
  console.log('set exercise id to: ', exerciseId)
  return {
    type: 'EXID_CHANGED',
    payload: exerciseId
  }
}