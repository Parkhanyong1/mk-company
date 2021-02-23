import Link from 'next/link';
import headerStyle from 'styles/header.module.css';

const Company = () => {
  return (
    <div>
      <Link href="/container/company/Ceo">
        <a className={headerStyle.headerA1}>대표 인사말</a>
      </Link>

      <Link href="/container/company/History">
        <a className={headerStyle.headerA2}>회사연혁</a>
      </Link>

      <Link href="/container/company/Policy">
        <a className={headerStyle.headerA2}>경영방침</a>
      </Link>

      <Link href="/container/company/Organization">
        <a className={headerStyle.headerA2}>조직도</a>
      </Link>

      <Link href="/container/company/Certification">
        <a className={headerStyle.headerA2}>인증현황 및 특허</a>
      </Link>

      <Link href="/container/company/Way">
        <a className={headerStyle.headerA2}>찾아오는 길</a>
      </Link>
    </div>
  );
};

export default Company;
