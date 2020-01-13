import React from 'react';
import {shallow} from 'enzyme';
import { MapContainer } from './MapContainer';

describe('MapContainer Component', () => {
  it('should match the snapshot with market and no path passed in', () => {
    const mockMarket = {
      id: "1002192",
      marketname: "Ballston FRESHFARM Market",
      favorite: false,
      GoogleLink: "http://maps.google.com/?q=38.881112%2C%20-77.112179%20(%22Ballston+FRESHFARM+Market%22)",
      Address: "901 N Taylor St, Ballston, Virginia, 22203",
      Schedule: "June - October Thursday 3:00 PM to 7:00 PM",
      Products: "Baked goods; Cheese and/or dairy products; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Meat; Poultry",
      latitude: "38.881112",
      longitude: "-77.112179"
    }
    const wrapper = shallow(<MapContainer market={mockMarket} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with markets and markets path passed in', () => {
    const mockMarkets = [{
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
    }]
    const wrapper = shallow(<MapContainer markets={mockMarkets} path="/markets" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with markets and favorites path passed in', () => {
    const mockMarkets = [{
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
    }]
    const wrapper = shallow(<MapContainer markets={mockMarkets} path="/favorites" />);
    expect(wrapper).toMatchSnapshot();
  });

});
