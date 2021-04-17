import React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import UserLogin from '../components/UserLogin';


it('Testing username', () => {                                       
    const wrapper = mount(<MemoryRouter><UserLogin /></MemoryRouter>);
    let received = wrapper.find({id: "username-textbox"}).simulate('change', {target:{id: "username-textbox", value: "user1"}}).props().value
    expect(received).toBe("user1");
});

it('Testing password', () => {                                       
    const wrapper = mount(<MemoryRouter><UserLogin /></MemoryRouter>);    
    let received = wrapper.find({id: "password-textbox"}).simulate('change', {target:{id: "password-textbox", value: "abcd1234"}}).props().value
    expect(received).toBe("abcd1234");
});