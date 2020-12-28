import Header from '../../Header';
import Footer from '../../Footer';
import Link from 'next/link';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
