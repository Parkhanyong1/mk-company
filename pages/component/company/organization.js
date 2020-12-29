import Layout from '../../container/common/layout';
import css from '../../../styles/index.css';

function organization() {
  return (
    <div>
      <Layout>
        <section>
          <nav className={css.organizationnav}>
            <span>
              <h1>
                ORGANIZATION
                <p>CHART</p>
              </h1>
            </span>
          </nav>
          <main className={css.organizationmain}>
            <h2>(주)엠케이 조직도</h2>
            <img
              src="/organizationtable.jpg"
              alt="회사 조직도"
              title="회사 조직도"
            />
          </main>
        </section>
      </Layout>
    </div>
  );
}

export default organization;
