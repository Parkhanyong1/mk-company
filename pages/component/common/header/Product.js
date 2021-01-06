import Link from 'next/link';

const Product = () => {
  return (
    <div>
      <p>
        <Link href="container/product/Ring">
          <a>링기어</a>
        </Link>
      </p>
      <p>
        <Link href="container/product/Outinput">
          <a>아웃풋 & 인풋기어</a>
        </Link>
      </p>
      <p>
        <Link href="container/product/Others">
          <a>기타</a>
        </Link>
      </p>
    </div>
  );
};

export default Product;
