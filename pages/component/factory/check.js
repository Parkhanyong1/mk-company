import Layout from '../../container/common/layout';
import css from '../../../styles/index.css';

function Check() {
  return (
    <div>
      <Layout>
        <section>
          <nav className={css.checknav}>
            <span>
              <h1>
                CHECK
                <p>FACILITY</p>
              </h1>
            </span>
          </nav>
          <main className={css.checkmain}>
            <h2>검사설비</h2>
            <p>
              <img src="/checkfacility1.jpg" alt="" title="" />
            </p>
            <p>
              <img src="/checkfacility2.jpg" alt="" title="" />
            </p>
          </main>
        </section>
      </Layout>
    </div>
  );
}

export default Check;
