/** @format */
//******************************************************************************
// Exercise Id Reducer
// Matching Function(s) in src/actions/index.js:
// setExerciseId(exerciseId)
//
export default function(state = null, action) {
    switch (action.type) {
      case 'EXID_CHANGED':
        return action.payload
    }
    return state
  }