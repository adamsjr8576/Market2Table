export const controlFavoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'CONTROL_FAVORITES':
      var marketsFromStorage = localStorage.getItem('favorites');
      var parsedMarkets = JSON.parse(marketsFromStorage);
      if (action.market.favorite) {
        if (parsedMarkets !== null) {
          const stringMarket = JSON.stringify([...parsedMarkets, action.market]);
          localStorage.setItem('favorites', stringMarket);
        } else {
          const stringMarket = JSON.stringify([action.market]);
          localStorage.setItem('favorites', stringMarket);
        }
        return [...state, action.market]
      } else {
        if (parsedMarkets !== null) {
          const filteredStorage = parsedMarkets.filter(market => {
            return market.id !== action.market.id
          });
          const stringMarket = JSON.stringify(filteredStorage);
          localStorage.setItem('favorites', stringMarket);
        }
        const filtered = state.filter(market => {
          return market.id !== action.market.id
        });
        return filtered
      }

    case 'ADD_FAVORITES':
      return action.markets

    default:
      return state;
  }
}
