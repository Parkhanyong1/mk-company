// import '../styles/index.module.css';

// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }
import React from 'react';
import App from 'next/app';
// import Link from 'next/link';

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
