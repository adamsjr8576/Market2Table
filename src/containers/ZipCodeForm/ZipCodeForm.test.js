import React from 'react';
import { shallow } from 'enzyme';
import { ZipCodeForm, mapDispatchToProps, mapStateToProps } from './ZipCodeForm';
import { addMarkets, addZipCode, addFavorites } from '../../actions/index.js';

describe('ZipCodeForm', () => {
  describe('ZipCodeForm Component', () => {
    let mockAddMarkets;
    let mockAddZipCode;
    let mockAddFavorites;
    let mockZipCode;
    let mockFavorites;
    let mockPath;

    beforeEach(() => {
      mockAddMarkets = jest.fn();
      mockAddZipCode = jest.fn();
      mockAddFavorites = jest.fn();
      mockFavorites = [];
    });

    it('should match the snapshot with path of markets and the right zipcode', () => {
      mockZipCode = '80401';
      mockPath = '/markets';
      const wrapper = shallow(
        <ZipCodeForm
          addMarkets={mockAddMarkets}
          addZipCode={mockAddZipCode}
          addFavorites={mockAddFavorites}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot with path of markets and no zipcode', () => {
      mockZipCode = '';
      mockPath = '/markets';
      const wrapper = shallow(
        <ZipCodeForm
          addMarkets={mockAddMarkets}
          addZipCode={mockAddZipCode}
          addFavorites={mockAddFavorites}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should match the snapshot with favorites path and no zipcode', () => {
      mockZipCode = '';
      mockPath = '/favorites';
      const wrapper = shallow(
        <ZipCodeForm
          addMarkets={mockAddMarkets}
          addZipCode={mockAddZipCode}
          addFavorites={mockAddFavorites}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />);

      expect(wrapper).toMatchSnapshot();
    });

    it('Should have a default state', () => {
      mockZipCode = '';
      mockPath = '/favorites';
      const wrapper = shallow(
        <ZipCodeForm
          addMarkets={mockAddMarkets}
          addZipCode={mockAddZipCode}
          addFavorites={mockAddFavorites}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />);
      const mockDefaultState = {
        zipCode: '',
        hasError: false
      }

      expect(wrapper.state()).toEqual(mockDefaultState);
    });

    it('should change state when handleZipCodeChange is invoked', () => {
      mockZipCode = '';
      mockPath = '/favorites';
      const mockEvent = {
        target: {
          name: 'zipCode',
          value: '80'
        }
      }
      const wrapper = shallow(
        <ZipCodeForm
          addMarkets={mockAddMarkets}
          addZipCode={mockAddZipCode}
          addFavorites={mockAddFavorites}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />);
      let mockState = {
        zipCode: '80',
        hasError: false
      }
      wrapper.instance().handleZipCodeChange(mockEvent);
      expect(wrapper.state()).toEqual(mockState)
    });

    it('should change state when handleZipCodeSubmit is invoked', () => {
      mockZipCode = '80401';
      mockPath = '/favorites';
      const wrapper = shallow(
        <ZipCodeForm
          addMarkets={mockAddMarkets}
          addZipCode={mockAddZipCode}
          addFavorites={mockAddFavorites}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />);
      let mockState = {
        zipCode: '',
        hasError: false
      }
      wrapper.setState({ zipCode: '80401', hasError: false });
      wrapper.instance().handleZipCodeSubmit(mockFavorites);
      expect(wrapper.state()).toEqual(mockState)
    });

    it('should invoke addMarkets with updatedFavorites when handleZipCodeSubmit is invoked', () => {
      mockZipCode = '80401';
      mockPath = '/favorites';
      const wrapper = shallow(
        <ZipCodeForm
          addMarkets={mockAddMarkets}
          addZipCode={mockAddZipCode}
          addFavorites={mockAddFavorites}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />);
      const mockMarkets = [
        {"id":"1002192", "marketname":"Ballston FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
        "Address":"901 N Taylor St, Ballston, Virginia, 22203",
        "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
        "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"},
        {"id":"22008839", "marketname":"Ballston Farmers Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
        "Address":"901 N Taylor St, Ballston, Virginia, 22203",
        "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
        "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"},
        {"id":"1002291", "marketname":"Four Mile Run Farmers & Artisans Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
        "Address":"901 N Taylor St, Ballston, Virginia, 22203",
        "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
        "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"},
        {"id":"1002181", "marketname":"Dupont Circle FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
        "Address":"901 N Taylor St, Ballston, Virginia, 22203",
        "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
        "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"}
      ]
      wrapper.setState({ zipCode: '80401' });
      wrapper.instance().handleZipCodeSubmit(mockFavorites);
      expect(mockAddMarkets).toHaveBeenCalledWith(mockMarkets);
      expect(mockAddZipCode).toHaveBeenCalledWith(wrapper.state('zipCode'));
    });

    it('Should invoke handleZipCodeChange on input change', () => {
      mockZipCode = '';
      mockPath = '/favorites';
      const wrapper = shallow(
        <ZipCodeForm
          addMarkets={mockAddMarkets}
          addZipCode={mockAddZipCode}
          addFavorites={mockAddFavorites}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />);
        wrapper.instance().handleZipCodeChange = jest.fn();
        const mockEvent = {
          target: {
            name: 'zipCode',
            value: '80'
          }
        }
        wrapper.find('.zip-code-input').simulate('change', mockEvent);
        expect(wrapper.instance().handleZipCodeChange).toHaveBeenCalledWith(mockEvent)
    });

    it('Should invoke handleZipCodeSubmit on button click', () => {
      mockZipCode = '';
      mockPath = '/favorites';
      const wrapper = shallow(
        <ZipCodeForm
          addMarkets={mockAddMarkets}
          addZipCode={mockAddZipCode}
          addFavorites={mockAddFavorites}
          zipCode={mockZipCode}
          favorites={mockFavorites}
          path={mockPath}
        />);
        wrapper.instance().handleZipCodeSubmit = jest.fn();
        wrapper.find('.zip-code-button').simulate('click');
        expect(wrapper.instance().handleZipCodeSubmit).toHaveBeenCalledWith(mockFavorites)
    });
  });

  describe('mapStateToProps', () => {
    it('Should return an object with the zipCode and favorites', () => {
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
        favorites: [],
        zipCode: '80401'
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('Should call dispatch with addMarkets', () =>{
      const mockMarkets = [
        {"id":"1002192", "marketname":"Ballston FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
        "Address":"901 N Taylor St, Ballston, Virginia, 22203",
        "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
        "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"},
        {"id":"22008839", "marketname":"Ballston Farmers Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
        "Address":"901 N Taylor St, Ballston, Virginia, 22203",
        "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
        "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"},
        {"id":"1002291", "marketname":"Four Mile Run Farmers & Artisans Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
        "Address":"901 N Taylor St, Ballston, Virginia, 22203",
        "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
        "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"},
        {"id":"1002181", "marketname":"Dupont Circle FRESHFARM Market", "GoogleLink":"http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
        "Address":"901 N Taylor St, Ballston, Virginia, 22203",
        "Schedule":"June - October Thursday 3:00 PM to 7:00 PM",
        "Products":"Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry", "favorite": false, "latitude": "38.881112", "longitude": "-77.112179"}
      ]
      const mockDispatch = jest.fn();
      const actionToDispatch = addMarkets(mockMarkets);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addMarkets(mockMarkets);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('Should call dispatch with addZipCode', () =>{
      const mockZipCode = '80401';
      const mockDispatch = jest.fn();
      const actionToDispatch = addZipCode(mockZipCode);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addZipCode(mockZipCode);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('Should call dispatch with addFavorites', () =>{
      const mockfavorites = [];
      const mockDispatch = jest.fn();
      const actionToDispatch = addFavorites(mockfavorites);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addFavorites(mockfavorites);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
