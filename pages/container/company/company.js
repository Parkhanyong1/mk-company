import Link from 'next/link';
import css from '../../../styles/ceo.css';

const Company = () => {
  return (
    <div>
      <p>
        <Link href="../../component/company/ceo">
          <a>대표 인사말</a>
        </Link>
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
      </p>
    </div>
  );
};

export default Company;
