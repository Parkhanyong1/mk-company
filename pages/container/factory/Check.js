import checkStyle from 'styles/factory/check.module.css';

function Check() {
  return (
    <div>
      <section>
        <nav className={checkStyle.checkNav}>
          <span className={checkStyle.navSpan}>
            <h1>
              CHECK
              <p>FACILITY</p>
            </h1>
          </span>
        </nav>
        <main className={checkStyle.checkMain}>
          <h2>검사설비</h2>
          <p>
            <img src="/checkfacility1.jpg" alt="" title="" />
          </p>
          <p>
            <img src="/checkfacility2.jpg" alt="" title="" />
          </p>
        </main>
      </section>
    </div>
  );
}

export default Check;
