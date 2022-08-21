import React, { Component } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';

class ModalDetail extends Component {
  constructor (props) {
      super(props);
      this.state = {
          modal: false
      }
  }

  _setVisible (e) {
    const { OnChangeModal } = this.props;
    OnChangeModal('ViewDetail')
  }

  render() {
    const { visible, dataEdit, fields, jenis } = this.props

    return (
      <>
        <CModal visible={visible} onClose={() => this._setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Data Detail</CModalTitle>
          </CModalHeader>
          <CModalBody>
          <CTable>
                <CTableHead>
                  <CTableRow>
                    {
                      fields ?
                      fields.map(value => {
                        return (
                          <CTableHeaderCell scope="col" key={value}>{value}</CTableHeaderCell>
                        )
                      }) : null
                    }
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    dataEdit ?
                    dataEdit.map(value => {
                      if(jenis === 'customer'){
                        return (
                          <CTableRow key={value.id}>
                            <CTableDataCell>{value.nameCustomer}</CTableDataCell>
                            <CTableDataCell>{value.alamat}</CTableDataCell>
                            <CTableDataCell>{value.email}</CTableDataCell>
                            <CTableDataCell>{value.phone}</CTableDataCell>
                          </CTableRow>
                        )
                      }
                      if(jenis === 'order'){
                        return (
                          <CTableRow key={value.id}>
                            <CTableDataCell>{value.nameBarang}</CTableDataCell>
                            <CTableDataCell>{value.jnsBarang}</CTableDataCell>
                            <CTableDataCell>{value.nameSuplier}</CTableDataCell>
                            <CTableDataCell>{value.jumlahBarang}</CTableDataCell>
                            <CTableDataCell>{value.hrgPerpcs}</CTableDataCell>
                            <CTableDataCell>{value.jmlBayar}</CTableDataCell>
                          </CTableRow>
                        )
                      }
                    })
                    : null
                  }
                </CTableBody>
              </CTable>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => this._setVisible(false)}>
              Close
            </CButton>
          </CModalFooter>
        </CModal>
      </>
    )
  }

}

export default ModalDetail
