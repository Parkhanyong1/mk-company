import Link from 'next/link';
import headerStyle from 'styles/header.module.css';

const Contact = () => {
  return (
    <div>
      {/* <p>
        <a>공지사항</a>
      </p> */}
      <p>
        <Link href="/container/contact/Recruitment">
          <a className={headerStyle.headerA}>채용공고</a>
        </Link>
      </p>
    </div>
  );
};

export default Contact;
