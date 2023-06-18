import * as React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
// import '../node_modules/@plake492/form-validation/esm/assets/css/index.css'
// import '../node_modules/@plake492/t_css_utils/dist/index.css'
import '../../assets/scss/index.scss'

const container: any = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render(<App />)
