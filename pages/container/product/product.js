import Link from 'next/link';
import css from '../../../styles/index.module.css';

const Product = () => {
  return (
    <div>
      <p>
        <Link href="../../component/product/ring">
          <a>링기어</a>
        </Link>
      </p>
      <p>
        <Link href="../../component/product/outinput">
          <a>아웃풋 & 인풋기어</a>
        </Link>
      </p>
      <p>
        <Link href="../../component/product/others">
          <a>기타</a>
        </Link>
      </p>
    </div>
  );
};

export default Product;
