import Link from 'next/link';
import headerStyle from 'styles/header.module.css';

const Product = () => {
  return (
    <div>
      <p>
        <Link href="container/product/Ring">
          <a className={headerStyle.headerA}>링기어</a>
        </Link>
      </p>
      <p>
        <Link href="container/product/Outinput">
          <a className={headerStyle.headerA}>아웃인풋기어</a>
        </Link>
      </p>
      <p>
        <Link href="container/product/Others">
          <a className={headerStyle.headerA}>기타</a>
        </Link>
      </p>
    </div>
  );
};

export default Product;
