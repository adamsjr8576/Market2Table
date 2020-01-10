export const addZipCodeReducer = (state = '', action) => {
  switch(action.type) {
    case 'ADD_ZIPCODE':
      return action.zipCode;

    case 'REMOVE_ZIPCODE':
      return action.emptyString

    default:
    return state
  }
}
