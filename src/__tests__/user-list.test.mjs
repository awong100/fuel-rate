import React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import UserList from '../components/user-list.component';
import axios from 'axios'


it('renders', () => {
    const wrapper = mount(<MemoryRouter><UserList /></MemoryRouter>);
    expect(wrapper.exists()).toBe(true)
});

it('finds the table', () => {                                       
    const wrapper = mount(<MemoryRouter><UserList /></MemoryRouter>);
    let received = wrapper.find('table').length
    expect(received).toBe(1)
});

it('counts tr tags', () => {                                       
    const wrapper = mount(<MemoryRouter><UserList /></MemoryRouter>);
    let received = wrapper.find('tr').length
    expect(received).toBeGreaterThanOrEqual(1)
});
