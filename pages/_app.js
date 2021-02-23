import React from 'react';
import App from 'next/app';
import Header from 'pages/container/common/Header.js';
import Footer from 'pages/container/common/Footer.js';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

class RootApp extends App {
  render() {
    const { Component, ...pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default RootApp;
