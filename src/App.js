import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom'
import { history } from './helpers'
import './scss/style.scss'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login'))

class App extends Component {
  render() {
    let user = localStorage.getItem('user')
    return (
      <BrowserRouter history={history}>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/ogin" name="Login Page" element={<Login />} />
            <Route path="*" element={user ? <DefaultLayout /> : <Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
