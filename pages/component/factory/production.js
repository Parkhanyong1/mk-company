import Layout from '../../container/common/layout';
import productionStyle from '../../../styles/factory/production.module.css';

function production() {
  return (
    <div>
      <Layout>
        <section>
          <nav className={productionStyle.productionNav}>
            <span>
              <h1>
                PRODUCTION
                <p>FACILITY</p>
              </h1>
            </span>
          </nav>
          <main className={productionStyle.productionMain}>
            <h2>생산 설비</h2>
            <p>
              <img src="/productionfacility1.jpg" alt="" />
            </p>
            <p>
              <img src="/productionfacility2.jpg" alt="" />
            </p>
            <p>
              <img src="/productionfacility3.jpg" alt="" />
            </p>
            <p>
              <img src="/productionfacility4.jpg" alt="" />
            </p>
          </main>
        </section>
      </Layout>
    </div>
  );
}

export default production;
