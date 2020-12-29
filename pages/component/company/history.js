import Layout from '../../container/common/layout';
import css from '../../../styles/index.css';

function history() {
  return (
    <div>
      <Layout>
        <section>
          <nav className={css.historynav}>
            <span>
              <h1>COMPANY HISTORY</h1>
            </span>
          </nav>
          <main className={css.historymain}>
            <h2>회사연혁</h2>
            <p>2019.01.21 (주)엠케이 설립</p>
            <p>2020.09.01 소프트웨어 개발부 대구알파시티로 이전</p>
          </main>
        </section>
      </Layout>
    </div>
  );
}

export default history;
