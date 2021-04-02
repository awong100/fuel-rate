 React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import FuelQuote from '../components/FuelQuote';
import { MemoryRouter } from 'react-router-dom';


it('Testing usernames', () => {
    const wrapper = mount(<MemoryRouter><FuelQuote /></MemoryRouter>);
    let received = wrapper.find({id: "username"}).simulate('change', {target:{id: "username", value: "Admin-awong"}}).props().value
    expect(received).toBe("Admin-awong");