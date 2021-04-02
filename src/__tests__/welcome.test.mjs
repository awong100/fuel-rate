import React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import Welcome from '../components/welcome.component'
// import { Link } from 'react-router';
import { MemoryRouter } from 'react-router-dom';


// create-link test
it('includes link to Create New User', () => {                                       
  const wrapper = mount(<MemoryRouter><Welcome /></MemoryRouter>);
  expect(wrapper.find({id: "create-link", to: "/create"}).props().to).toBe("/create");
 });

// login-link test
it('includes link to Login as an existing user', () => {                                       
  const wrapper = mount(<MemoryRouter><Welcome /></MemoryRouter>);
  expect(wrapper.find({id: "login-link", to: "/login"}).props().to).toBe("/login");
 });