import React from 'react'

import greetings from './lib/greetings'

let Hello = () => {
    return <h1>Hello, {greetings('World')}</h1>
}

export default Hello