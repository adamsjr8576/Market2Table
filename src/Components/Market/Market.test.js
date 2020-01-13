import React from 'react';
import {shallow} from 'enzyme';
import { Market, mapDispatchToProps } from './Market';
import { toggleFavorite, controlFavorites } from '../../actions/index.js';

describe('Market', () => {
  describe('Market Component', () => {
    let mockToggleFavorite;
    let mockControlFavorites;
    let mockMarket;
    let mockImage;

    beforeEach(() => {
      mockToggleFavorite = jest.fn();
      mockControlFavorites = jest.fn();
      mockMarket = {
        id: '1234',
        marketname: 'Golden Farmers Markets',
        favorite: true
      }
      mockImage = './redChili.png';
    });

    it('should match the snapshot with all the correct data passed in', () => {
      const wrapper = shallow(
        <Market
          market={mockMarket}
          image={mockImage}
          toggleFavorite={mockToggleFavorite}
          controlFavorites={mockControlFavorites}
        />)

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapDispatchToProps', () => {
    let mockMarket;
    let mockDispatch;

    beforeEach(() => {
      mockMarket = {
        id: '1234',
        marketname: 'Golden Farmers Markets',
        favorite: true
      }
      mockDispatch = jest.fn();
    });

    it('should call dispatch with toggleFavorite', () => {
      const actionToDispatch = toggleFavorite(mockMarket.id, mockMarket.favorite);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.toggleFavorite(mockMarket.id, mockMarket.favorite);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with controlFavorites', () => {
      const actionToDispatch = controlFavorites(mockMarket);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.controlFavorites(mockMarket);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

  });
});
