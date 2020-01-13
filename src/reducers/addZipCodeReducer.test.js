import { addZipCodeReducer } from '../reducers/addZipCodeReducer';

describe('addZipCodeReducer', () => {
  it('should have a default state', () => {
    const expected = '';
    const result = addZipCodeReducer(undefined, {});
     expect(result).toEqual(expected);
  });

  it('Should update state when type is ADD_ZIPCODE', () => {
    const zipCode = '80401';
    const mockAction = {
      type: 'ADD_ZIPCODE',
      zipCode
    }
    const expected = zipCode;
    const result = addZipCodeReducer('', mockAction);
    expect(result).toEqual(expected);
  });

  it('Should update state when type is REMOVE_ZIPCODE', () => {
    const emptyString = '';
    const mockAction = {
      type: 'REMOVE_ZIPCODE',
      emptyString
    }
    const expected = emptyString;
    const result = addZipCodeReducer('80401', mockAction);
    expect(result).toEqual(expected);
  });
});
