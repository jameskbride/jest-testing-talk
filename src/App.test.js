import React from 'react'

import {shallow} from 'enzyme'

import App from './App'
import Hello from './Hello'

describe('App', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    expect(wrapper.text()).toContain('Learn React')
  })

  it('has an app link', () => {
    expect(wrapper.find('.App-link').first()).toHaveLength(1)
  })

  it('has a Hello component', () => {
    expect(wrapper.find(Hello).first()).toHaveLength(1)
  })

  it('has a Hello component with an id', () => {
    expect(wrapper.find('#hello-wrapper').first()).toHaveLength(1)
  })

  it('updates the message when the Change Learning Experience button is clicked', () => {
    wrapper.find('#change-button').first().simulate('click')

    expect(wrapper.text()).toContain('Learn Jest')
  })
})