import Layout from '../../container/common/layout';
import recruitmentStyle from '../../../styles/contact/recruitment.module.css';

function Recruitment() {
  return (
    <div>
      <Layout>
        <section>
          <nav className={recruitmentStyle.recruitmentNav}>
            <span>
              <h1>RECRUITMENT</h1>
            </span>
          </nav>
          <main className={recruitmentStyle.recruitmentMain}>
            <h2>채용정보</h2>
            <p>
              <h3>채용 접수 방법</h3>
            </p>
            <p>
              E-mail 접수 : jujw1501@hanmail.net으로 이력서 작성 후 접수해
              주시기 바랍니다.
            </p>
            <p>
              <h3>기타</h3>
            </p>
            <p>
              합격자 통보는 이메일 및 휴대폰으로 연락하므로 기재해 주시기
              바랍니다.
            </p>
            <p>기타 문의사항은 jujw1501@hanmail.net으로 문의주시길 바랍니다.</p>
          </main>
        </section>
      </Layout>
    </div>
  );
}

export default Recruitment;
