import React, { Component } from 'react'
import { AppContent, AppHeader } from '../components/index'
import { history } from '../helpers/history';

class DefaultLayout extends Component {
  constructor (prop) {
      super(prop);
      this.state = {
      }
  }

  UNSAFE_componentWillMount = () => {
    let user = localStorage.getItem('user');
    if(!user){
      history.push('/login')
    }
  }

  render () {
    const { user } = this.props;

    return (
      <div>
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
        </div>
      </div>
    )
  }
}

export default DefaultLayout
