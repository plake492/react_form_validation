import * as React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'

import '../../assets/scss/index.scss'

const container: any = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render(<App />)
