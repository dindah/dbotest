import React, { Component } from 'react'
import {
  CContainer
} from '@coreui/react'
class HomePage extends Component {
  constructor (props) {
      super(props);
      this.state = {
      }
  }

  render () {
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        Hallo
      </CContainer>
    </div>
    )
  }
}

export default HomePage
