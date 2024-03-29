/** @format */
//******************************************************************************
// Exercise String Reducer
// Matching Function(s) in src/actions/index.js:
// setExerciseString(exerciseString)
//
export default function(state = null, action) {
    switch (action.type) {
      case 'EXSTRING_CHANGED':
        return action.payload
    }
    return state
  }