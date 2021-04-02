import React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import ManageUser from '../components/ManageUser';
import { MemoryRouter } from 'react-router-dom';

it('Testing Names', () => {
    const wrapper = mount(<MemoryRouter><ManageUser /></MemoryRouter>);
    let received = wrapper.find({id: "name-textbox"}).simulate('change', {target:{id: "name-textbox", value: "Burrow H"}}).props().value
    expect(received).toBe("Burrow H");
});

it('Testing Address', () => {
    const wrapper = mount(<MemoryRouter><ManageUser /></MemoryRouter>);
    let received = wrapper.find({id: "Add1-textbox"}).simulate('change', {target:{id: "Add1-textbox", value: "345 Final Street"}}).props().value
    expect(received).toBe("345 Final Street");
});

it('Testing City', () => {
    const wrapper = mount(<MemoryRouter><ManageUser /></MemoryRouter>);
    let received = wrapper.find({id: "city-textbox"}).simulate('change', {target:{id: "city-textbox", value: "Katy"}}).props().value
    expect(received).toBe("Katy");
});

it('Testing State', () => {
    const wrapper = mount(<MemoryRouter><ManageUser /></MemoryRouter>);
    let received = wrapper.find({id: "state-textbox"}).simulate('change', {target:{id: "state-textbox", value: "TX"}}).props().value
    expect(received).toBe("TX");
});


it('Testing Zip', () => {
    const wrapper = mount(<MemoryRouter><ManageUser /></MemoryRouter>);
    let received = wrapper.find({id: "zip-textbox"}).simulate('change', {target:{id: "zip-textbox", value: "77203"}}).props().value
    expect(received).toBe("77203");
});

