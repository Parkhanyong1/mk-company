import Link from 'next/link';

const Factory = () => {
  return (
    <div>
      <p>
        <Link href="container/factory/Production">
          <a>생산설비현황</a>
        </Link>
      </p>
      <p>
        <Link href="container/factory/Check">
          <a>검사설비현황</a>
        </Link>
      </p>
    </div>
  );
};

export default Factory;
