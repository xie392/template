import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import './styles/main.scss'

const app = createRoot(document.getElementById('root')!)
app.render(createElement(BrowserRouter, { children: createElement(App) }))
