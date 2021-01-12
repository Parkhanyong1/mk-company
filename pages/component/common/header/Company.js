import Link from 'next/link';
import headerStyle from 'styles/header.module.css';

const Company = () => {
  return (
    <div>
      <p>
        <Link href="/container/company/Ceo">
          <a className={headerStyle.headerA}>대표 인사말</a>
        </Link>
      </p>
      <p>
        <Link href="/container/company/History">
          <a className={headerStyle.headerA}>회사연혁</a>
        </Link>
      </p>
      <p>
        <Link href="/container/company/Policy">
          <a className={headerStyle.headerA}>경영방침</a>
        </Link>
      </p>
      <p>
        <Link href="/container/company/Organization">
          <a className={headerStyle.headerA}>조직도</a>
        </Link>
      </p>
      <p>
        <Link href="/container/company/Certification">
          <a className={headerStyle.headerA}>인증현황 및 특허</a>
        </Link>
      </p>
      <p>
        <Link href="/container/company/Way">
          <a className={headerStyle.headerA}>찾아오는 길</a>
        </Link>
      </p>
    </div>
  );
};

export default Company;
