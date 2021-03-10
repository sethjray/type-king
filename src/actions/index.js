/** @format */
//******************************************************************************
// src/actions/index.js
// Holds all the Redux functions that are used to set global Redux variables
//
//
import axios from 'axios'

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

export const fetchStats = (userId, exerciseId, wordsPerMinute, accuracy, wordsTyped) => {
  return(dispatch) => {
    return axios.get(`http://localhost:8080/api/users/${userId}`)
    .then(response => {
      console.log("in fetchStats: ", response.data)
      dispatch(updateStats(userId, exerciseId, wordsPerMinute, accuracy, wordsTyped, response.data))
    })
    .catch(error => {
      throw(error);
    });
  };
};

export const updateStats = (userId, exerciseId, wordsPerMinute, accuracy, wordsTyped, statistics) => {
  //Global Stats
  statistics.globalStats.averageAcc = accuracy;
  if(wordsPerMinute > statistics.globalStats.fastestWPM) {
    statistics.globalStats.fastestWPM = wordsPerMinute;
  }
  statistics.globalStats.wordsTyped += wordsTyped;

  //Exercise Stats
  if(accuracy > statistics.exerciseStats["exercise" + exerciseId].bestAcc) {
    statistics.exerciseStats["exercise" + exerciseId].bestAcc = accuracy;
  }
  if(wordsPerMinute > statistics.exerciseStats["exercise" + exerciseId].fastestWPM) {
    statistics.exerciseStats["exercise" + exerciseId].fastestWPM = wordsPerMinute;
  }
  console.log('Should be new statistics object:', statistics)
  return(dispatch) => {
    return axios.put(`http://localhost:8080/api/users/${userId}`,{
      statistics
    })
    .then(response => {
      console.log("in updateStats: ", response.data)
      dispatch(updateStatsSuccess(response.data))
    })
    .catch(error => {
      throw(error);
    }); 
  };
};

export const updateStatsSuccess = (stats) => {
  console.log('Should be updated stats: ', stats)
  return {
    type: 'STATS_CHANGED',
    payload: stats
  }
};