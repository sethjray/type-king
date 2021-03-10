/** @format */
//******************************************************************************
// Stats Reducer
// Matching Function(s) in src/actions/index.js:
//
export default function(state = null, action) {
    switch (action.type) {
      case 'STATS_CHANGED':
        return action.payload
    }
    return state
  }
  