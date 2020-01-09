export const addZipCodeReducer = (state = '', action) => {
  switch(action.type) {
    case 'ADD_ZIPCODE':
      return action.zipCode;
    default:
    return state
  }
}
