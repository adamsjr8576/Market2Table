import React from 'react';
import { shallow } from 'enzyme';
import { MarketPage, mapDispatchToProps, mapStateToProps } from './MarketPage';
import { toggleFavorite, controlFavorites } from '../../actions/index.js';

describe('MarketPage', () => {
  describe('MarketPage Component', () => {
    let mockMarkets;
    let mockId;
    let mockFavorites;
    let mockToggleFavorite;
    let mockControlFavorites;

    beforeEach(() => {
      mockMarkets = [
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
        mockFavorites = [
          {
          id: "39",
          marketname: "Golden Farmers Market",
          favorite: false,
          GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
          Address: "here",
          Schedule: "June - October Thursday 3:00 PM to 7:00 PM",
          Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry",
          latitude: "38.881112",
          longitude: "-77.112179"
          }
        ]
        mockToggleFavorite = jest.fn();
        mockControlFavorites = jest.fn();
    });

    it('Should match the snapshot with all the right info passed in', () => {
      mockId = "22008839";
      const wrapper = shallow(<MarketPage
        id={mockId}
        markets={mockMarkets}
        favorites={mockFavorites}
        toggleFavorite={mockToggleFavorite}
        controlFavorites={mockControlFavorites}
        />);
      expect(wrapper).toMatchSnapshot();
    });

    it('Should match the snapshot with all the right info passed in', () => {
      mockId = "39";
      const wrapper = shallow(<MarketPage
        id={mockId}
        markets={mockMarkets}
        favorites={mockFavorites}
        toggleFavorite={mockToggleFavorite}
        controlFavorites={mockControlFavorites}
        />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should invoke toggleFavorite and controlFavorites when button is clicked', () => {
      mockId = "22008839";
      const mockMarket = {
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
      const wrapper = shallow(<MarketPage
        id={mockId}
        markets={mockMarkets}
        favorites={mockFavorites}
        toggleFavorite={mockToggleFavorite}
        controlFavorites={mockControlFavorites}
        />);

      wrapper.find('.favorites-button').simulate('click');

      expect(mockToggleFavorite).toHaveBeenCalledWith(mockId);
      expect(mockControlFavorites).toHaveBeenCalledWith(mockMarket);
    });
  });

  describe('mapDispatchToProps', () => {
    let mockMarket;
    let mockDispatch;

    beforeEach(() => {
      mockMarket = {
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
      mockDispatch = jest.fn();
    });

    it('should call dispatch with toggleFavorite', () => {
      const actionToDispatch = toggleFavorite(mockMarket.id);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.toggleFavorite(mockMarket.id);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with controlFavorites', () => {
      const actionToDispatch = controlFavorites(mockMarket);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.controlFavorites(mockMarket);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with markes and favorites', () => {
      const mockState = {
        farmersMarkets:
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
          }],
        favorites: [],
        zipCode: '80401'
      }
      const expected = {
        markets:
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
          }],
        favorites: [],
      }
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
