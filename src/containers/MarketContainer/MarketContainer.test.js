import React from 'react';
import {shallow} from 'enzyme';
import { MarketContainer, mapStateToProps } from './MarketContainer';

describe('MarketContainer', () => {
  describe('MarketContainer Component', () => {
    let mockMarkets;
    let mockZipCode;
    let mockFavorites;
    let mockPath;

    beforeEach(() => {
      mockMarkets =
        [
           {
             id: "1002192",
             marketname: "Ballston FRESHFARM Market",
             favorite: false,
             GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
             Address: "901 N Taylor St, Ballston, Virginia, 22203",
             Schedule: "June - October Thursday 3:00 PM to 7:00 PM",
             Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry",
             latitude: "38.881112",
             longitude: "-77.112179"
           },
           {
             id: "22008839",
             marketname: "Ballston Farmers Market",
             favorite: false,
             GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
             Address: "901 N Taylor St, Ballston, Virginia, 22203",
             Schedule: "June - October Thursday 3:00 PM to 7:00 PM",
             Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry",
             latitude: "38.881112",
             longitude: "-77.112179"
           }
        ]
    });

    it('should match the snapshot with path on favorites containing a favorite', () => {
      mockFavorites = [
        {
          id: "22008839",
          marketname: "Ballston Farmers Market",
          favorite: true,
          GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
          Address: "901 N Taylor St, Ballston, Virginia, 22203",
          Schedule: "June - October Thursday 3:00 PM to 7:00 PM",
          Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry",
          latitude: "38.881112",
          longitude: "-77.112179"
        }
      ]
      mockPath = '/markets/favorites';
      mockZipCode = '80401';
      const wrapper = shallow(
        <MarketContainer
          markets={mockMarkets}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />)

      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot with path on favorites containing no favorites', () => {
      mockFavorites = []
      mockPath = '/markets/favorites';
      mockZipCode = '80401';
      const wrapper = shallow(
        <MarketContainer
          markets={mockMarkets}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />)

      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot with path on markets', () => {
      mockFavorites = []
      mockPath = '/markets';
      mockZipCode = '80401';
      const wrapper = shallow(
        <MarketContainer
          markets={mockMarkets}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />)

      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot with path on markets and when there is no zip code', () => {
      mockFavorites = []
      mockPath = '/markets';
      mockZipCode = '';
      const wrapper = shallow(
        <MarketContainer
          markets={mockMarkets}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />)

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with markets, zipCode, favorites', () => {
      const mockMarkets = [
         {
           id: "1002192",
           marketname: "Ballston FRESHFARM Market",
           favorite: false,
           GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
           Address: "901 N Taylor St, Ballston, Virginia, 22203",
           Schedule: "June - October Thursday 3:00 PM to 7:00 PM",
           Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry",
           latitude: "38.881112",
           longitude: "-77.112179"
         },
         {
           id: "22008839",
           marketname: "Ballston Farmers Market",
           favorite: false,
           GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
           Address: "901 N Taylor St, Ballston, Virginia, 22203",
           Schedule: "June - October Thursday 3:00 PM to 7:00 PM",
           Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry",
           latitude: "38.881112",
           longitude: "-77.112179"
         }];
      const mockState = {
        farmersMarkets: mockMarkets,
        zipCode: '80401',
        favorites: []
      }

      const expected = {
        markets: mockMarkets,
        zipCode: '80401',
        favorites: []
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
