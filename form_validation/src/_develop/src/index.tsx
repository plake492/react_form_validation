import * as React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import '../../assets/scss/index.scss'

const container: HTMLElement | null = document.getElementById('root')
const root = ReactDOMClient.createRoot(container as HTMLElement)

root.render(<App />)
