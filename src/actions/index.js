export const addMarkets = markets => {
  return {
    type: 'ADD_MARKETS',
    markets
  }
};

export const addZipCode = zipCode => {
   return {
     type: 'ADD_ZIPCODE',
     zipCode
   }
 };
