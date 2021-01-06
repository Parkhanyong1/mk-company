import Link from 'next/link';

const Company = () => {
  return (
    <div>
      <p>
        <Link href="container/company/Ceo">
          <a>대표 인사말</a>
        </Link>
      </p>
      <p>
        <Link href="container/company/History">
          <a>회사연혁</a>
        </Link>
      </p>
      <p>
        <Link href="container/company/Policy">
          <a>경영방침</a>
        </Link>
      </p>
      <p>
        <Link href="container/company/Organization">
          <a>조직도</a>
        </Link>
      </p>
      <p>
        <Link href="container/company/Certification">
          <a>인증현황 및 특허</a>
        </Link>
      </p>
      <p>
        <Link href="container/company/Way">
          <a>찾아오는 길</a>
        </Link>
      </p>
    </div>
  );
};

export default Company;
