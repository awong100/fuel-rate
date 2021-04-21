import React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import CreateUser from '../components/create-user.component'
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios'


it('changes the username', () => {                                       
    const wrapper = mount(<MemoryRouter><CreateUser /></MemoryRouter>);
    wrapper.find('input').at(0).simulate('change', {target:{name: "username-textbox", value: "username101"}})
    let received = wrapper.find('input').at(0).props().value
    expect(received).toBe("username101");
});

it('changes the password', () => {                                       
    const wrapper = mount(<MemoryRouter><CreateUser /></MemoryRouter>);
    wrapper.find('input').at(1).simulate('change', {target:{name: "password-textbox", value: "password101"}})
    let received = wrapper.find('input').at(1).props().value
    expect(received).toBe("password101");
});

it('changes the confirmed password', () => {                                       
    const wrapper = mount(<MemoryRouter><CreateUser /></MemoryRouter>);
    wrapper.find('input').at(2).simulate('change', {target:{name: "confirm-password-textbox", value: "confirmed_password101"}})
    let received = wrapper.find('input').at(2).props().value
    expect(received).toBe("confirmed_password101");
});

it('countes total input components', () => {                                       
    const wrapper = mount(<MemoryRouter><CreateUser /></MemoryRouter>);
    let received = wrapper.find('input')
    expect(received.length).toBe(4)
});

it('finds the create user button', () => {                                       
    const wrapper = mount(<MemoryRouter><CreateUser /></MemoryRouter>);
    let received = wrapper.find('input').at(3).props().value
    expect(received).toBe("Create New User")
});

it('calls axios post', () => {                                       
    const wrapper = mount(<MemoryRouter><CreateUser /></MemoryRouter>);
    let mock = jest.spyOn(axios, 'post')
    wrapper.find('input').at(3).simulate('submit', {target: { name: "create-btn"}})
    expect(mock).toHaveBeenCalled()
});