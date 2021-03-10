/** @format */
//******************************************************************************
// User Reducer
// Matching Function(s) in src/actions/index.js:
// setUser(user)
//
export default function(state = null, action) {
  switch (action.type) {
    case 'USER_SET':
      return action.payload;
  }
  return state;
}
