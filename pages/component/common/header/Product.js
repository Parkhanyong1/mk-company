import Link from 'next/link';
import headerStyle from 'styles/header.module.css';

const Product = () => {
  return (
    <div>
      <Link href="/container/product/Ring">
        <a className={headerStyle.headerA1}>링기어</a>
      </Link>

      <Link href="/container/product/Outinput">
        <a className={headerStyle.headerA2}>아웃인풋기어</a>
      </Link>

      <Link href="/container/product/Others">
        <a className={headerStyle.headerA2}>기타</a>
      </Link>
    </div>
  );
};

export default Product;
