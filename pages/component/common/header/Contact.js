import Link from 'next/link';
import headerStyle from 'styles/header.module.css';

const Contact = () => {
  return (
    <div>
      <Link href="/container/contact/Recruitment">
        <a className={headerStyle.headerA1}>채용공고</a>
      </Link>
    </div>
  );
};

export default Contact;
