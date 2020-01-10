export const addMarketsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MARKETS':
      return action.markets

    case 'TOGGLE_FAVORITE':
      const stateCopy = [...state];
      const updatedFavorite = stateCopy.map(market => {
        if(market.id === action.id) {
          market.favorite = !market.favorite
        }
        return market;
      });
      return updatedFavorite;

    default:
      return state;
  }
}
