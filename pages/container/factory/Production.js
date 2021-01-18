import productionStyle from 'styles/factory/production.module.css';

function Production() {
  return (
    <div>
      <section>
        <nav className={productionStyle.productionNav}>
          <span className={productionStyle.navSpan}>
            <h1>
              PRODUCTION
              <p>FACILITY</p>
            </h1>
          </span>
        </nav>
        <main className={productionStyle.productionMain}>
          <h2>생산 설비</h2>
          <p>
            <img
              src="/productionfacility1.jpg"
              width="1100"
              height="500"
              alt=""
            />
          </p>
          <p>
            <img
              src="/productionfacility2.jpg"
              width="1100"
              height="500"
              alt=""
            />
          </p>
          <p>
            <img
              src="/productionfacility3.jpg"
              width="1100"
              height="500"
              alt=""
            />
          </p>
          <p>
            <img
              src="/productionfacility4.jpg"
              width="1100"
              height="500"
              alt=""
            />
          </p>
        </main>
      </section>
    </div>
  );
}

export default Production;
