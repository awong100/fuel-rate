import React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import FuelHistory from '../components/fuel-history';
import { MemoryRouter } from 'react-router-dom';
import { UserContext } from '../UserContext';

const user = {
    username: "",
    password: "",
}  

it('renders', () => {
    const wrapper = mount(<UserContext.Provider value={user}><MemoryRouter><FuelHistory /></MemoryRouter></UserContext.Provider>);
    expect(wrapper.exists()).toBe(true)
});