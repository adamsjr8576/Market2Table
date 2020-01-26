import { addMarketsReducer } from '../reducers/addMarketsReducer';

describe('addMarketsReducer', () => {

  it('should have a default state', () => {
    const expected = [];
    const result = addMarketsReducer(undefined, {});
     expect(result).toEqual(expected);
  });

  it('should update state when type is ADD_MARKETS', () => {
    const mockMarkets = [
      {"id":"1002192", "marketname":"Ballston FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"},
      {"id":"22008839", "marketname":"Ballston Farmers Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"}
    ];
    const mockAction = {
      type: 'ADD_MARKETS',
      markets: mockMarkets
    }
    const expected = mockMarkets;
    const result = addMarketsReducer([], mockAction);
    expect(result).toEqual(expected);
  });

  it('should update state when type is TOGGLE_FAVORITE', () => {
    const mockState = [
      {"id":"1002192", "marketname":"Ballston FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"},
      {"id":"22008839", "marketname":"Ballston Farmers Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"}
    ];
    const mockId = '1002192';
    const mockAction = {
      type: 'TOGGLE_FAVORITE',
      id: mockId
    }
    const expected = [
      {"id":"1002192", "marketname":"Ballston FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": true, "latitude": "38.881112", "longitude": "-77.112179"},
      {"id":"22008839", "marketname":"Ballston Farmers Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"}
    ];
    const result = addMarketsReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });

  it('should update state when type is REMOVE_MARKETS', () => {
    const mockEmptyArray = [];
    const mockAction = {
      type: 'REMOVE_MARKETS',
      emptyArray: mockEmptyArray
    }
    const mockState = [
      {"id":"1002192", "marketname":"Ballston FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": true, "latitude": "38.881112", "longitude": "-77.112179"},
      {"id":"22008839", "marketname":"Ballston Farmers Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      "Address":"901 N Taylor St, Ballston, Virginia, 22203",
      "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
      "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"}
    ]
    const expected = mockEmptyArray;
    const result = addMarketsReducer(mockState, mockAction);
    expect(result).toEqual(expected);
  });
});
