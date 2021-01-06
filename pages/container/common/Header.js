import Company from 'pages/component/common/header/Company';
import Product from 'pages/component/common/header/Product';
import Factory from 'pages/component/common/header/Factory';
import Contact from 'pages/component/common/header/Contact';
import Link from 'next/link';
import headerStyle from 'styles/header.module.css';

const Header = () => {
  return (
    <div>
      <header className={headerStyle.header}>
        <Link href="/">
          <a className={headerStyle.headerA}>
            <h1 className={headerStyle.headerH1}>(주)엠케이</h1>
          </a>
        </Link>
        <ul className={headerStyle.headerUl}>
          <li className={headerStyle.headerLi}>
            <h3>COMPANY</h3>
            <ol className={headerStyle.headerOl}>
              <Company />
            </ol>
          </li>
          <li className={headerStyle.headerLi}>
            <h3>PRODUCT</h3>
            <ol className={headerStyle.headerOl}>
              <Product />
            </ol>
          </li>
          <li className={headerStyle.headerLi}>
            <h3>FACTORY</h3>
            <ol className={headerStyle.headerOl}>
              <Factory />
            </ol>
          </li>
          <li className={headerStyle.headerLi}>
            <h3>CONTACT US</h3>
            <ol className={headerStyle.headerOl}>
              <Contact />
            </ol>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
