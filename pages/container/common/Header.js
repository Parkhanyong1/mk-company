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
          <a className={headerStyle.headerTitle}>
            <h1 className={headerStyle.headerTitle}>(주)엠케이</h1>
          </a>
        </Link>
        <ul className={headerStyle.headerMainmenu}>
          <li className={headerStyle.headerSubmenu}>
            <h3>COMPANY</h3>
            <ol className={headerStyle.headerDropdown}>
              <Company />
            </ol>
          </li>
          <li className={headerStyle.headerSubmenu}>
            <h3>PRODUCT</h3>
            <ol className={headerStyle.headerDropdown}>
              <Product />
            </ol>
          </li>
          <li className={headerStyle.headerSubmenu}>
            <h3>FACTORY</h3>
            <ol className={headerStyle.headerDropdown}>
              <Factory />
            </ol>
          </li>
          <li className={headerStyle.headerSubmenu}>
            <h3>CONTACT</h3>
            <ol className={headerStyle.headerDropdown}>
              <Contact />
            </ol>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
