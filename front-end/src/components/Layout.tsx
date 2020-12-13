import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
// import { Form } from '../components/Form'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
