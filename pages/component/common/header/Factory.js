import Link from 'next/link';
import headerStyle from 'styles/header.module.css';

const Factory = () => {
  return (
    <div>
      <Link href="/container/factory/Production">
        <a className={headerStyle.headerA1}>생산설비현황</a>
      </Link>

      <Link href="/container/factory/Check">
        <a className={headerStyle.headerA2}>검사설비현황</a>
      </Link>
    </div>
  );
};

export default Factory;
