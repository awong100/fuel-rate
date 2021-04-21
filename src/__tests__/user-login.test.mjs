import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import UserLogin from '../components/UserLogin';
import { UserContext } from '../UserContext';
import axios from 'axios'

const user = {
    username: "",
    password: "",
}   

// const mockHistoryPush = jest.fn();

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useHistory: () => ({
//       push: mockHistoryPush,
//     }),
//   }));

it('changes the username', () => {                                     
    const wrapper = mount(<UserContext.Provider value={user}><MemoryRouter><UserLogin /></MemoryRouter></UserContext.Provider>);
    wrapper.find('input').at(0).simulate('change', {target:{name: "username-textbox", value: "username101"}})
    let received = wrapper.find('input').at(0).props().value
    expect(received).toBe("username101");
});

it('changes the password', () => {                                       
    const wrapper = mount(<UserContext.Provider value={user}><MemoryRouter><UserLogin /></MemoryRouter></UserContext.Provider>);
    wrapper.find('input').at(1).simulate('change', {target:{name: "password-textbox", value: "password101"}})
    let received = wrapper.find('input').at(1).props().value
    expect(received).toBe("password101");
});

it('calls axios post', () => {                                       
    const wrapper = mount(<UserContext.Provider value={user}><MemoryRouter><UserLogin /></MemoryRouter></UserContext.Provider>);
    let mock = jest.spyOn(axios, 'post')
    wrapper.find('input').at(2).simulate('submit', {target: { name: "login-btn"}})
    expect(mock).toHaveBeenCalled()
});

it('checks to see if user.params are actually changed onSubmit()', () => {                                       
    const wrapper = mount(<UserContext.Provider value={user}><MemoryRouter><UserLogin /></MemoryRouter></UserContext.Provider>);
    let mock = jest.spyOn(axios, 'post')
    wrapper.find('input').at(0).simulate('change', {target:{name: "username-textbox", value: "username101"}})
    wrapper.find('input').at(1).simulate('change', {target:{name: "password-textbox", value: "password101"}})
    wrapper.find('input').at(2).simulate('click', {target: { name: "login-btn"}})
    expect(mock).toHaveBeenCalled()
    expect(UserLogin.username).toBe("username101")
    expect(UserLogin.password).toBe("password101")
});
