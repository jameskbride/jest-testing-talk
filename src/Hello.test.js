import React from 'react'
import {shallow} from 'enzyme'
import Hello from './Hello'
import greetings from './lib/greetings'

jest.mock('./lib/greetings')

describe('Hello', () => {
    it('renders without crashing', () => {
        let wrapper = shallow(<Hello />)
        expect(wrapper.text()).toContain('Hello')
    })

    it('retrieves the greeting while mocked', () => {
        greetings.mockImplementationOnce((greeting) => 'Mock Value!')

        let wrapper = shallow(<Hello />)
        expect(wrapper.text()).toContain('Hello, Mock Value!')
        expect(greetings.mock.calls[0][0]).toEqual('World')
    })
})