import Link from 'next/link';
import css from '../../../styles/index.module.css';

const Company = () => {
  return (
    <div>
      <p>
        <Link href="../../component/company/ceo">
          <a>대표 인사말</a>
        </Link>
      </p>
      <p>
        <Link href="../../component/company/history">
          <a>회사연혁</a>
        </Link>
      </p>
      <p>
        <Link href="../../component/company/policy">
          <a>경영방침</a>
        </Link>
      </p>
      <p>
        <Link href="../../component/company/organization">
          <a>조직도</a>
        </Link>
      </p>
      <p>
        <Link href="../../component/company/certification">
          <a>인증현황 및 특허</a>
        </Link>
      </p>
      <p>
        <Link href="../../component/company/way">
          <a>찾아오는 길</a>
        </Link>
      </p>
    </div>
  );
};

export default Company;
