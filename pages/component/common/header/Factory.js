import Link from 'next/link';
import headerStyle from 'styles/header.module.css';

const Factory = () => {
  return (
    <div>
      <p>
        <Link href="/container/factory/Production">
          <a className={headerStyle.headerA}>생산설비현황</a>
        </Link>
      </p>
      <p>
        <Link href="/container/factory/Check">
          <a className={headerStyle.headerA}>검사설비현황</a>
        </Link>
      </p>
    </div>
  );
};

export default Factory;
