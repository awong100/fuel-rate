import React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import FuelQuote from '../components/FuelQuote';
import { MemoryRouter } from 'react-router-dom';


it('Testing Gallons', () => {
    const wrapper = mount(<MemoryRouter><FuelQuote /></MemoryRouter>);
    let received = wrapper.find({id: "gallons-textbox"}).simulate('change', {target:{id: "gallons-textbox", value: "7"}}).props().value
    expect(received).toBe("7");
});