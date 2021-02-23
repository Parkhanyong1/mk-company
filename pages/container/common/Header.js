import Company from 'pages/component/common/header/Company';
import Product from 'pages/component/common/header/Product';
import Factory from 'pages/component/common/header/Factory';
import Contact from 'pages/component/common/header/Contact';
import Link from 'next/link';
import headerStyle from 'styles/header.module.css';

const Header = () => {
  return (
    <div className={headerStyle.headerBody}>
      <header className={headerStyle.Header}>
        <Link href="/">
          <a className={headerStyle.headerTitle}>(주)엠케이</a>
        </Link>

        <ul className={headerStyle.headerMenubar}>
          <li className={headerStyle.headerMainmenu}>
            <div className={headerStyle.headerSubmenu}>company</div>
            <ol className={headerStyle.headerDropdown}>
              <Company />
            </ol>
          </li>

          <li className={headerStyle.headerMainmenu}>
            <div className={headerStyle.headerSubmenu}>product</div>
            <ol className={headerStyle.headerDropdown}>
              <Product />
            </ol>
          </li>

          <li className={headerStyle.headerMainmenu}>
            <div className={headerStyle.headerSubmenu}>factory</div>
            <ol className={headerStyle.headerDropdown}>
              <Factory />
            </ol>
          </li>

          <li className={headerStyle.headerMainmenu}>
            <div className={headerStyle.headerSubmenu}>contact</div>
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
