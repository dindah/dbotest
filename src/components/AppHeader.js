import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu, cilSettings } from '@coreui/icons'
import { history } from '../helpers/history'
import { logo } from 'src/assets/brand/logo'

class AppHeader extends React.Component {

  _handleLogout () {
    localStorage.clear();
    history.push('/login');
    window.location.reload(false);
  }

  render () {
    let user = JSON.parse(localStorage.getItem('user'));

    return (
      <CHeader position="sticky" className="mb-4">
        <CContainer fluid>
          <CHeaderToggler
            className="ps-1"
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <CHeaderBrand className="mx-auto d-md-none" to="/">
            <CIcon icon={logo} height={48} alt="Logo" />
          </CHeaderBrand>
          <CHeaderNav className="d-none d-md-flex me-auto">
            <CNavItem>
              <CNavLink to="/home" component={NavLink}>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/tabel-customer">Customer</CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="/tabel-order">Order</CNavLink>
            </CNavItem>
          </CHeaderNav>
          <CHeaderNav>
            <CNavItem>
            {
              user ?
              user.map((value, idx) => {
                return (
                  <CNavLink key={idx}>{value.name}</CNavLink>
                )
              })
              : null
            }
            </CNavItem>
            <CNavItem>
              <CNavLink onClick={() => {this._handleLogout()}}>
                <CIcon icon={cilSettings} size="lg" />
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
          </CContainer>
        <CHeaderDivider />
      </CHeader>
    )
  }
}

export default AppHeader
