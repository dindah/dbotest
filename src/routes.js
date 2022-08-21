import React from 'react'

import HomePage from './views/pages/home/index';
import CustomerTables from './views/pages/customer/index';
import OrderTables from './views/pages/order';
import Login from './views/pages/login';

const routes = [
  { path: '/', exact: true, name: 'Home', element: HomePage },
  { path: '/home', exact: true, name: 'Home', element: HomePage },
  { path: '/tabel-customer', exact: true, name: 'List Tabel Customer', element: CustomerTables },
  { path: '/tabel-order', exact: true, name: 'List Tabel Order', element: OrderTables },
  { path: '/login', exact: true, name: 'Halaman Login', element: Login },
]

export default routes
