import React, { Component } from 'react'
import {
  CButton,
  CCardBody,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CCard,
  CCardGroup,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

class ModalEdit extends Component {
  constructor (props) {
      super(props);
      this.state = {
          modal: false,
          customerEdit : '',
          alamat: '',
          email: '',
          phone: '',
          nameBarang: '',
          jnsBarang: ''
      }
  }

  _setVisible (e) {
    const { OnChangeModalEdit } = this.props;
    this.setState({
      customerEdit: '',
      alamat: '',
      email: '',
      phone: ''
    }, () => {
      OnChangeModalEdit('ClosedForm')
    })
  }

  _handleSubmit () {
    const { customerEdit, alamat, email, phone } = this.state;
    const { dataedit, OnChangeModalEdit } = this.props
    let userEdit = {
      'nameCustomer': customerEdit || dataedit.nameCustomer,
      'alamat' : alamat || dataedit.alamat,
      'email' : email || dataedit.email,
      'phone' : phone || dataedit.phone
    }
    OnChangeModalEdit('EditForm', userEdit)
  }

  render() {
    const { isOpen, dataedit, jenis } = this.props
    let customer = dataedit || {};

    return (
      <>
        <CModal visible={isOpen} onClose={() => this._setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Form Edit</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CContainer>
              <CRow className="justify-content-center">
                <CCol md={8}>
                  <CCardGroup>
                    <CCard className="p-4">
                      <CCardBody>
                        {
                          jenis === 'customer' ?
                            <CForm>
                              <p className="text-medium-emphasis">Sesuaikan Data Untuk Di Update</p>
                              <CInputGroup className="mb-3">
                                <CFormInput
                                  type="text"
                                  placeholder={customer.nameCustomer || ''}
                                  autoComplete="current"
                                  onChange={(e) => {
                                    this.setState({
                                      customerEdit: e.target.value
                                    })
                                  }}
                                />
                              </CInputGroup>
                              <CInputGroup className="mb-3">
                                <CFormInput
                                  type="text"
                                  placeholder={customer.alamat || ''}
                                  autoComplete="current"
                                  onChange={(e) => {
                                    this.setState({
                                      alamat: e.target.value
                                    })
                                  }}
                                />
                              </CInputGroup>
                              <CInputGroup className="mb-3">
                                <CFormInput
                                  type="text"
                                  placeholder={customer.email || ''}
                                  autoComplete="current"
                                  onChange={(e) => {
                                    this.setState({
                                      email: e.target.value
                                    })
                                  }}
                                />
                              </CInputGroup>
                              <CInputGroup className="mb-3">
                                <CFormInput
                                  type="text"
                                  placeholder={customer.phone || ''}
                                  autoComplete="current"
                                  onChange={(e) => {
                                    this.setState({
                                      phone: e.target.value
                                    })
                                  }}
                                />
                              </CInputGroup>
                              <CRow>
                              </CRow>
                            </CForm>
                          :
                            <CForm>
                              <p className="text-medium-emphasis">Sesuaikan Data Untuk Di Update</p>
                              <CInputGroup className="mb-3">
                                <CFormInput
                                  type="text"
                                  placeholder={customer.nameBarang || ''}
                                  autoComplete="current"
                                  onChange={(e) => {
                                    this.setState({
                                      nameBarang: e.target.value
                                    })
                                  }}
                                />
                              </CInputGroup>
                              <CInputGroup className="mb-3">
                                <CFormInput
                                  type="text"
                                  placeholder={customer.jnsBarang || ''}
                                  autoComplete="current"
                                  onChange={(e) => {
                                    this.setState({
                                      jnsBarang: e.target.value
                                    })
                                  }}
                                />
                              </CInputGroup>
                              <CInputGroup className="mb-3">
                                <CFormInput
                                  type="text"
                                  placeholder={customer.nameSuplier || ''}
                                  autoComplete="current"
                                  onChange={(e) => {
                                    this.setState({
                                      nameSuplier: e.target.value
                                    })
                                  }}
                                />
                              </CInputGroup>
                              <CInputGroup className="mb-3">
                                <CFormInput
                                  type="text"
                                  placeholder={customer.jumlahBarang || ''}
                                  autoComplete="current"
                                  onChange={(e) => {
                                    this.setState({
                                      jumlahBarang: e.target.value
                                    })
                                  }}
                                />
                              </CInputGroup>
                              <CInputGroup className="mb-3">
                                <CFormInput
                                  type="text"
                                  placeholder={customer.hrgPerpcs || ''}
                                  autoComplete="current"
                                  onChange={(e) => {
                                    this.setState({
                                      hrgPerpcs: e.target.value
                                    })
                                  }}
                                />
                              </CInputGroup>
                              <CInputGroup className="mb-3">
                                <CFormInput
                                  type="text"
                                  placeholder={customer.jmlBayar || ''}
                                  autoComplete="current"
                                  onChange={(e) => {
                                    this.setState({
                                      jmlBayar: e.target.value
                                    })
                                  }}
                                />
                              </CInputGroup>
                              <CRow>
                              </CRow>
                            </CForm>
                        }
                      </CCardBody>
                    </CCard>
                  </CCardGroup>
                </CCol>
              </CRow>
            </CContainer>
          </CModalBody>
          <CModalFooter>
            <CCol xs={3}>
              <CButton color="primary" className="px-4" onClick={() => this._handleSubmit()}>
                Update
              </CButton>
            </CCol>
          </CModalFooter>
        </CModal>
      </>
    )
  }

}

export default ModalEdit
