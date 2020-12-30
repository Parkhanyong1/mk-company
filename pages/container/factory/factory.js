import Link from 'next/link';
import css from '../../../styles/index.css';

const Factory = () => {
  return (
    <div>
      <p>
        <Link href="../../component/factory/production">
          <a>생산설비현황</a>
        </Link>
      </p>
      <p>
        <Link href="../../component/factory/check">
          <a>검사설비현황</a>
        </Link>
      </p>
    </div>
  );
};

export default Factory;
