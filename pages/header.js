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
              {/* <p>
                <a>대표 인사말</a>
              </p>
              <p>
                <a>회사연혁</a>
              </p>
              <p>
                <a>경영방침</a>
              </p>
              <p>
                <a>조직도</a>
              </p>
              <p>
                <a>인증현황 및 특허</a>
              </p>
              <p>
                <a>찾아오는 길</a>
              </p> */}
              <Company />
            </ol>
          </li>
          <li>
            <h3>PRODUCT</h3>
            <ol>
              {/* <p>
                <a>링기어</a>
              </p>
              <p>
                <a>아웃풋 & 인풋기어</a>
              </p>
              <p>
                <a>기타</a>
              </p> */}
              <Product />
            </ol>
          </li>
          <li>
            <h3>FACTORY</h3>
            <ol>
              {/* <p>
                <a>생산설비현황</a>
              </p>
              <p>
                <a>검사설비현황</a>
              </p> */}
              <Factory />
            </ol>
          </li>
          <li>
            <h3>CONTACT US</h3>
            <ol>
              {/* <p>
                <a>공지사항</a>
              </p>
              <p>
                <a>채용공고</a>
              </p> */}
              <Contact />
            </ol>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
