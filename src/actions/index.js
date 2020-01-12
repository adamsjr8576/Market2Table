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

 export const removeZipCode = () => {
   return {
     type: 'REMOVE_ZIPCODE',
     emptyString: ''
   }
 }

 export const toggleFavorite = (id, favorite) => {
   return {
     type: 'TOGGLE_FAVORITE',
     id,
     favorite
   }
 }

 export const controlFavorites = market => {
   return {
     type: 'CONTROL_FAVORITES',
     market
   }
 }

 export const addFavorites = markets => {
   return {
     type: 'ADD_FAVORITES',
     markets
   }
 }
