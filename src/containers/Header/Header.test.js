import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapDispatchToProps, mapStateToProps } from './Header';
import { removeZipCode } from '../../actions/index.js';

describe ('Header', () => {
  describe('Header Component', () => {
    let mockZipCode;
    let mockFavorites;
    let mockRemoveZipCode;
    let wrapper;

    beforeEach(() => {
      mockZipCode =  "80401";
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
      mockRemoveZipCode = jest.fn();
      wrapper = shallow(<Header
        zipCode={mockZipCode}
        favorites={mockFavorites}
        removeZipCode={mockRemoveZipCode}
        />)
    });
    it('should match the snapshot with all correct data passed in', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('Should return an object with zipCode and favorites', () => {
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
        zipCode: '80401',
        favorites: []
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('Should call dispatch with removeZipCode', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = removeZipCode();
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.removeZipCode();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
