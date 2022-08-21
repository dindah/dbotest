import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { login } from '../../../actions/auth';
import { history } from '../../../helpers/history';
import swal from 'sweetalert';
class Login extends Component {
  constructor (props) {
      super(props);
      this.state = {
          username: '',
          password: '',
          isLogin: false,
          loginAttempt: 0,
          endFailedAttempt: false
      }
  }

  _handleSubmit = async () => {
    const { username, password } = this.state
    const user = {
        username: username,
        password: password
    }
    let response = await login(user);
    if (response.data[0] !== undefined) {
        window.localStorage.setItem('user', JSON.stringify(response.data));
        history.push('/home')
        window.location.reload(false);
    } else {
      swal(`Pastikan Username dan Password Sudah Sesuai!`, {
          icon: 'danger',
          buttons: 'Terima Kasih'
      });
      localStorage.clear();
      history.push('/login')
      window.location.reload(false);
    }
  }

  _handlePassword (e) {
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }

  _handleUsername (e) {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  render () {
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText >
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" onChange={(e) => {this._handleUsername(e)}} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={ (e) => {this._handlePassword(e)}}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={() => this._handleSubmit()}>
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    )
  }
}

export default Login
