import Link from 'next/link';
import css from '../../../styles/ceo.css';

const Contact = () => {
  return (
    <div>
      {/* <p>
        <a>공지사항</a>
      </p> */}
      <p>
        <Link href="../../component/contactus/recruitment">
          <a>채용공고</a>
        </Link>
      </p>
    </div>
  );
};

export default Contact;
