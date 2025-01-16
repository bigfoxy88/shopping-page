import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import routes from './components/routes'

const router=createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
    <App/>
    </BrowserRouter>
 
)
