import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/Home/Home';
import { addCity } from '../redux/citiesSlice';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('handleClick function', () => {
  it('should alert if city is already in the list', () => {
    const cities = ['Kyiv'];
    const city = 'Kyiv';
    const alertMock = jest.spyOn(window, 'alert');
    const { getByText } = render(<Home />);
    const button = getByText('Add City');
    fireEvent.click(button);
    waitFor(() => expect(alertMock).toHaveBeenCalledTimes(1));
    expect(alertMock).toHaveBeenCalledWith(`${city} is already in your list`);
  });

  it('should dispatch addCity if city is not in the list', () => {
    const cities = [];
    const city = 'Kyiv';
    const dispatchMock = jest.fn();
    const { getByText } = render(<Home />);
    const button = getByText('Add City');
    fireEvent.click(button);
    waitFor(() => expect(dispatchMock).toHaveBeenCalledTimes(1));
    expect(dispatchMock).toHaveBeenCalledWith(addCity(city));
  });

  it('should call setSearchValue with an empty string', () => {
    const cities = [];
    const city = 'Kyiv';
    const setSearchValueMock = jest.fn();
    const { getByText } = render(<Home />);
    const button = getByText('Add City');
    fireEvent.click(button);
    waitFor(() => expect(setSearchValueMock).toHaveBeenCalledTimes(1));
    expect(setSearchValueMock).toHaveBeenCalledWith('');
  });
});