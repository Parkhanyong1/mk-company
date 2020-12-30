import Company from '../pages/container/company/company';
import Product from '../pages/container/product/product';
import Factory from '../pages/container/factory/factory';
import Contact from '../pages/container/contact/contact';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <header>
        <Link href="/">
          <a>
            <h1>(주)엠케이</h1>
          </a>
        </Link>
        <ul>
          <li>
            <h3>COMPANY</h3>
            <ol>
              <Company />
            </ol>
          </li>
          <li>
            <h3>PRODUCT</h3>
            <ol>
              <Product />
            </ol>
          </li>
          <li>
            <h3>FACTORY</h3>
            <ol>
              <Factory />
            </ol>
          </li>
          <li>
            <h3>CONTACT US</h3>
            <ol>
              <Contact />
            </ol>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
