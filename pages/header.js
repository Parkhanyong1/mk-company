// import Link from 'next/link';
import css from '../pages/_app';

// const linkStyle = {
//     marginRight: '1rem'
// }

const Header = () => {
  return (
    <div>
      <header>
        <h1>(주)엠케이</h1>
        <ul>
          <li>
            <h3>COMPANY</h3>
            <ol>
              <p>
                <a href="">대표 인사말</a>
              </p>
              <p>
                <a href="">회사연혁</a>
              </p>
              <p>
                <a href="">경영방침</a>
              </p>
              <p>
                <a href="">조직도</a>
              </p>
              <p>
                <a href="">인증현황 및 특허</a>
              </p>
              <p>
                <a href="">찾아오는 길</a>
              </p>
            </ol>
          </li>
          <li>
            <h3>PRODUCT</h3>
            <ol>
              <p>링기어</p>
              <p>아웃풋 & 인풋기어</p>
              <p>기타</p>
            </ol>
          </li>
          <li>
            <h3>FACTORY</h3>
            <ol>
              <p>생산설비현황</p>
              <p>검사설비현황</p>
            </ol>
          </li>
          <li>
            <h3>CONTACT US</h3>
            <ol>
              <p>공지사항</p>
              <p>채용공고</p>
            </ol>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
