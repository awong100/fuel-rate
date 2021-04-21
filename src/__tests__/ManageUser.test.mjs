import React, { useContext } from 'react';
import { mount, shallow, ShallowWrapper} from 'enzyme';
import { UserContext } from '../UserContext'
import ManageUser from '../components/ManageUser';
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import {TestRenderer, act} from 'react-test-renderer'
import axios from 'axios'
import { render } from '@testing-library/react';

let test_user = {
    username: "username",
    password: "password",
    name: "first last"
} 

// test_user = useContext(UserContext)

// it('renders', () => {
//     const spy =jest.spyOn(ManageUser.WrappedComponent, 'componentDidMount')
//     const wrapper = mount(<UserContext.Provider value={test_user}><MemoryRouter><ManageUser /></MemoryRouter></UserContext.Provider>)
//     expect(spy).toHaveBeenCalled()
//     wrapper.unmount()
// });

let container;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

test("with ReactDOM", () => {
    act(() => {
        ReactDOM.render((
            <UserContext.Provider value={test_user}>
                <ManageUser />
            </UserContext.Provider>
        ), container);
    });

    expect(container.textContent).toBe({test_user});
});

test("enzyme dive", () => {
    const element = mount(<UserContext.Provider value={test_user}>
        <MemoryRouter><ManageUser /></MemoryRouter>
    </UserContext.Provider>);
    // element.getWrappingComponent
    expect(element.dive().user).toBe(undefined)
});

