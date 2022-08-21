import React, { Component } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import {
  cilArrowLeft,
  cilArrowRight
} from '@coreui/icons'
import CIcon from '@coreui/icons-react';
import ModalDetail from '../../notifications/modals/Modals';
import ModalEdit from '../../notifications/modals/ModalEdit'
import swal from 'sweetalert';
import { FieldCustomer, FieldEditCustomer } from './fieldCustomer'

import { GetDataUser } from '../../../actions/auth';

class CustomerTables extends Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 10,
      dataUser: [],
      PageChange: 0,
      dataEdit : [],
      stateModal : false,
      stateEdit: false
    }
  }

  renderingPaging = (maxPage, currentPage) => {
    const { OnTableFunctionChanged, PageChange } = this.props;
    var component = [];
    var cPage = 1;
    var maxPerPage = 10
    for (var x = 1; x <= currentPage; x++) {
        if (x % maxPerPage === 0) {
            if (cPage === 1) {
                cPage += 3;
            } else {
                cPage += 5;
            }

            maxPerPage += 5;
        }
    }
    for (var i = cPage; i <= maxPerPage; i++) {
        if (i <= maxPage) {
            component.push(<li onClick={(e) => {
                this.setState({
                    ...this.state,
                    page: parseInt(e.target.id)
                }, () => {
                  OnTableFunctionChanged(PageChange, this.state);
                })
            }} className={currentPage === i ? 'page-item active' : 'page-item'}><a id={`${i}`} className="page-link">{i}</a></li>)
        }
    }

    return component;
  }

  componentDidMount () {
    this._getDataUser()
  }

  _getDataUser = async () => {
    let response = await GetDataUser();
    if (response.status === 200 ){
      this.setState({
        dataUser: response.data
      })
    }
  }

  _handleClick = async () => {
    this.setState({
      stateModal: !this.state.stateModal
    })
  }

  _handleEdit = async (e) => {
    this.setState({
      stateEdit: !this.state.stateEdit,
      dataEditNew: e
    })
  }

  _handleDelete = async (e) => {
    swal(`Permintaan Anda Untuk Delete Data Akan Di Lakukan Setelah Mendapatkan Konfirmasi, Dengan Nama Customer ${e.nameCustomer}!`, {
        icon: 'info',
        buttons: 'Terima Kasih'
    });
  }

  _handleEditForm = async (e) => {
    swal(`Terima Kasih Telah Melakukan Update!`, {
        icon: 'info',
        buttons: 'Terima Kasih'
    });
  }

  render () {
    const { dataUser, page, perPage, stateModal, stateEdit, dataEditNew } = this.state;
    let count = dataUser ? dataUser.length : 0
    const maxPage = Math.floor((count / perPage)) + ((count % perPage) > 0 ? 1 : 0);

    return (
      <div>

        <CRow>
        <ModalDetail visible={stateModal} dataEdit={stateModal} fields={FieldEditCustomer()} jenis="customer"
          OnChangeModal={ async (state, data) =>{
            switch (state) {
              case 'ViewDetail':
                this.setState({
                  stateModal: !this.state.stateModal
                })
              break
            default:
            }}
          }
        />
        <ModalEdit isOpen={stateEdit} jenis='customer' dataedit={dataEditNew}
        OnChangeModalEdit={ async (state, data) =>{
          switch (state) {
            case 'ClosedForm':
              if(this.state.stateEdit === true){
                this.setState({
                  stateEdit: !this.state.stateEdit
                })
              }
            break
            case 'EditForm':
              this.setState({
                stateEdit: !this.state.stateEdit
              }, () => {
                this._handleEditForm(data)
              })
            break
          default:
          }}
        }
      />

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>List Data Customer</strong>
          </CCardHeader>
          <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    {
                      FieldCustomer().map((value, idx) => {
                        return (
                          <CTableHeaderCell scope="col" key={idx}>{value}</CTableHeaderCell>
                        )
                      })
                    }
                  </CTableRow>
                </CTableHead>
                {
                  dataUser ?
                  dataUser.map(value =>{
                    return (
                      <CTableBody key={value.id}>
                        <CTableRow>
                          <CTableDataCell>{value.nameCustomer}</CTableDataCell>
                          <CTableDataCell>{value.alamat}</CTableDataCell>
                          <CTableDataCell>{value.email}</CTableDataCell>
                          <CTableDataCell>{value.phone}</CTableDataCell>
                          <CTableDataCell style={{ cursor: 'pointer'}} onClick={ () => {
                            this.state.dataEdit.splice(0, this.state.dataEdit.length)
                            this.state.dataEdit.push(value)
                            this._handleClick()
                          }}>Detail</CTableDataCell>
                          <CTableDataCell onClick={() => { this._handleEdit(value) }} style={{ cursor: 'pointer'}}>Edit</CTableDataCell>
                          <CTableDataCell onClick={() => { this._handleDelete(value) }} style={{ cursor: 'pointer'}}>Delete</CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    )
                  })
                  : null
                }
              </CTable>
            <CCol xs="12" style={{ padding: '0 0 0 0' }}>
              <div className="row">
                  <CCol>
                      <ul className="pagination justify-content-end">
                          <li className="page-item disabled"><a className="page-link">{`Page ${page} of ${maxPage} (Total ${count})`}</a></li>
                          <li onClick={() => { // Click to Previous Page
                              if (page === 1) {
                                  return;
                              }
                              const tmpPage = page;
                              this.setState({
                                  ...this.state,
                                  page: tmpPage - 1
                              }, () => {
                                // OnTableFunctionChanged(PageChange, this.state);
                              })
                          }} className={page === 1 ? 'page-item disabled' : 'page-item'}><a className="page-link"><CIcon icon={cilArrowLeft} customClassName="nav-icon" /></a></li>
                          {
                              this.renderingPaging(maxPage, page)
                          }

                          <li onClick={() => { // Click to Next Page
                              if (page >= maxPage) {
                                  return;
                              }
                              const tmpPage = page;
                              this.setState({
                                  ...this.state,
                                  page: (tmpPage * 1) + 1
                              }, () => {
                                // OnTableFunctionChanged(PageChange, this.state);
                              })
                          }} className={page >= maxPage ? 'page-item disabled' : 'page-item'}><a className="page-link"><CIcon icon={cilArrowRight} customClassName="nav-icon" /></a></li>
                      </ul>
                  </CCol>
              </div>
            </CCol>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
      </div>
    )
  }
}

export default CustomerTables
