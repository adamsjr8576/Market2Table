export const controlFavoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'CONTROL_FAVORITES':
      var marketsFromStorage = localStorage.getItem('favorites');
      var parsedMarkets = JSON.parse(marketsFromStorage);
      if (!action.market.favorite) {
        if (parsedMarkets !== null) {
          const newMarket = {...action.market, favorite: true }
          const stringMarket = JSON.stringify([...parsedMarkets, newMarket]);
          localStorage.setItem('favorites', stringMarket);
        } else {
          const newMarket = {...action.market, favorite: true }
          const stringMarket = JSON.stringify([newMarket]);
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
