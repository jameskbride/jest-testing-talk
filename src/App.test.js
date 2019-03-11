import React from 'react'

import {shallow} from 'enzyme'

import App from './App'

it('renders without crashing', () => {
  let wrapper = shallow(<App/>)

  expect(wrapper.text()).toContain('Learn React')
})
