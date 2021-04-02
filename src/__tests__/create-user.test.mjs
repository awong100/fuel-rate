import React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import CreateUser from '../components/create-user.component'
import { MemoryRouter } from 'react-router-dom';


it('includes link to Create New User', () => {                                       
    const wrapper = mount(<MemoryRouter><CreateUser /></MemoryRouter>);
    let received = wrapper.find({id: "username-textbox"}).simulate('change', {target:{id: "username-textbox", value: "username101"}}).props().value
    expect(received).toBe("username101");
});