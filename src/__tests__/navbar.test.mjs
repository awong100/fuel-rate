import React from 'react';
import { mount, /**shallow**/ } from 'enzyme';
import Navbar from '../components/navbar.component'

import { MemoryRouter } from 'react-router-dom';


// create-link test
it('includes link to User', () => {
  const wrapper = mount(<MemoryRouter><Navbar /></MemoryRouter>);
  expect(wrapper.find({id: "navbar-link", to: "/users"}).props().to).toBe("/users");
 });

it('includes link to Create New User', () => {
  const wrapper = mount(<MemoryRouter><Navbar /></MemoryRouter>);
  expect(wrapper.find({id: "navbar-link", to: "/create"}).props().to).toBe("/create");
 });

 it('includes link to Manage User', () => {
   const wrapper = mount(<MemoryRouter><Navbar /></MemoryRouter>);
   expect(wrapper.find({id: "navbar-link", to: "/manage"}).props().to).toBe("/manage");
  });

  it('includes link to FuelQuote', () => {
    const wrapper = mount(<MemoryRouter><Navbar /></MemoryRouter>);
    expect(wrapper.find({id: "navbar-link", to: "/quote"}).props().to).toBe("/quote");
   });

   it('includes link to history', () => {
     const wrapper = mount(<MemoryRouter><Navbar /></MemoryRouter>);
     expect(wrapper.find({id: "navbar-link", to: "/quotes"}).props().to).toBe("/quotes");
    });