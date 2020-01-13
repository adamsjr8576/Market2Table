import { controlFavoritesReducer } from '../reducers/controlFavoritesReducer';

describe('controlFavoritesReducer', () => {

  beforeEach(() => {
    const mockLocalStorage = Object.create(global.localStorage);
    mockLocalStorage.setItem = jest.fn();
    mockLocalStorage.getItem = () => [{"id":"1002181","marketname":"Dupont Circle FRESHFARM Market","favorite":true,"GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)","Address":"901 N Taylor St, Ballston, Virginia, 22203","Schedule":"June - October Thursday 3:00 PM to 7:00 PM","Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry","latitude":"38.881112","longitude":"-77.112179"}];
    global.localStorage = mockLocalStorage;

    const mockJSON = Object.create(global.JSON);
    mockJSON.parse = () => [{id: "22008839", marketname: "Ballston Farmers Market", favorite: true, GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)", Address: "901 N Taylor St, Ballston, Virginia, 22203", Schedule: "June - October Thursday 3:00 PM to 7:00 PM", Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", latitude: "38.881112",
    longitude: "-77.112179"}];
    mockJSON.stringify = () => [{"id":"1002181","marketname":"Dupont Circle FRESHFARM Market","favorite":true,"GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)","Address":"901 N Taylor St, Ballston, Virginia, 22203","Schedule":"June - October Thursday 3:00 PM to 7:00 PM","Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry","latitude":"38.881112","longitude":"-77.112179"}];
    global.JSON = mockJSON;
  });

  it('should have a default state', () => {
    const expected = [];
    const result = controlFavoritesReducer(undefined, {});
     expect(result).toEqual(expected);
  });

  it('Should add market to state when favorites is true and when type is CONTROL_FAVORITES', () => {
      const market = {id: "22008839", marketname: "Ballston Farmers Market", favorite: true, GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)", Address: "901 N Taylor St, Ballston, Virginia, 22203", Schedule: "June - October Thursday 3:00 PM to 7:00 PM", Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", latitude: "38.881112",
      longitude: "-77.112179"};

      const mockAction = {
        type: 'CONTROL_FAVORITES',
        market
      }
      const expected = [market];
      const result = controlFavoritesReducer([], mockAction);
      expect(result).toEqual(expected);
  });

  it('Should remove market to state when favorites is false and when type is CONTROL_FAVORITES', () => {
      const market = {id: "22008839", marketname: "Ballston Farmers Market", favorite: false, GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)", Address: "901 N Taylor St, Ballston, Virginia, 22203", Schedule: "June - October Thursday 3:00 PM to 7:00 PM", Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", latitude: "38.881112",
      longitude: "-77.112179"};
      const mockState = [{id: "22008839", marketname: "Ballston Farmers Market", favorite: true, GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)", Address: "901 N Taylor St, Ballston, Virginia, 22203", Schedule: "June - October Thursday 3:00 PM to 7:00 PM", Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", latitude: "38.881112",
      longitude: "-77.112179"}];
      const mockAction = {
        type: 'CONTROL_FAVORITES',
        market
      }
      const expected = [];
      const result = controlFavoritesReducer(mockState, mockAction);
      expect(result).toEqual(expected);
  });

  it('Should update state when type is ADD_FAVORITES', () => {
      const markets = [{id: "22008839", marketname: "Ballston Farmers Market", favorite: true, GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)", Address: "901 N Taylor St, Ballston, Virginia, 22203", Schedule: "June - October Thursday 3:00 PM to 7:00 PM", Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", latitude: "38.881112",
      longitude: "-77.112179"}];
      const mockAction = {
        type: 'ADD_FAVORITES',
        markets
      }
      const expected = markets;
      const result = controlFavoritesReducer([], mockAction);
      expect(result).toEqual(expected);
  });
});
