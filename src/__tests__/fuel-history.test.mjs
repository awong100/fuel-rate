import React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import FuelHistory from '../components/fuel-history';
import { MemoryRouter } from 'react-router-dom';


it('Testing History', () => {
    const wrapper = mount(<MemoryRouter><FuelHistory /></MemoryRouter>);
    let received = wrapper.find({id: "User-ID"}).simulate('change', {target:{id: "zip-textbox", value: "77203"}}).props().value
    expect(received).toBe("77203");
});