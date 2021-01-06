import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      {/* <p>
        <a>공지사항</a>
      </p> */}
      <p>
        <Link href="container/contact/recruitment">
          <a>채용공고</a>
        </Link>
      </p>
    </div>
  );
};

export default Contact;
