import React from 'react'
import Header from './Header'
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header style={{ flex: '0 0 auto', height: '50px' }} />
      <div style={{ flex: '1 0 auto', maxHeight: 'calc(100vh - 100px)', overflow: 'auto' }}>
        {children}
      </div>
      <Footer style={{ flex: '0 0 auto', height: '50px' }} />
    </div>
  );
};








  
  export default Layout;

