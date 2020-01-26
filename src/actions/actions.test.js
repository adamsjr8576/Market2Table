import * as actions from '../actions';

describe('actions', () => {
  it('Should have a type of ADD_MARKETS', () => {
    const markets = [
      {"id":"1002192", "marketname":"Ballston FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"},
      {"id":"22008839", "marketname":"Ballston Farmers Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"}
    ];
    const expectedAction = {
      type: 'ADD_MARKETS',
      markets
    }
    const result = actions.addMarkets(markets);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of REMOVE_MARKETS', () => {
    const emptyArray = [];
    const expectedAction = {
      type: 'REMOVE_MARKETS',
      emptyArray
    }
    const result = actions.removeMarkets();
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of ADD_ZIPCODE', () => {
    const zipCode = '80401';
    const expectedAction = {
      type: 'ADD_ZIPCODE',
      zipCode
    }
    const result = actions.addZipCode(zipCode);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of REMOVE_ZIPCODE', () => {
    const expectedAction = {
      type: 'REMOVE_ZIPCODE',
      emptyString: ''
    }
    const result = actions.removeZipCode();
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of TOGGLE_FAVORITE', () => {
    const id = '12345';
    const expectedAction = {
      type: 'TOGGLE_FAVORITE',
      id
    }
    const result = actions.toggleFavorite(id);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of CONTROL_FAVORITES', () => {
    const market = {
      "id":"1002192", "marketname":"Ballston FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"
    }
    const expectedAction = {
      type: 'CONTROL_FAVORITES',
      market
    }
    const result = actions.controlFavorites(market);
    expect(result).toEqual(expectedAction);
  });

  it('Should have a type of ADD_FAVORITES', () => {
    const markets = [
      {"id":"1002192", "marketname":"Ballston FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"},
      {"id":"22008839", "marketname":"Ballston Farmers Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"}
    ];
    const expectedAction = {
      type: 'ADD_FAVORITES',
      markets
    }
    const result = actions.addFavorites(markets);
    expect(result).toEqual(expectedAction);
  });
});
