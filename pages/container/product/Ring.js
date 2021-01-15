import ringStyle from 'styles/product/ring.module.css';

function Ring() {
  return (
    <div>
      <section>
        <nav className={ringStyle.ringNav}>
          <span className={ringStyle.navSpan}>
            <h1>RING GEAR</h1>
          </span>
        </nav>
        <main className={ringStyle.ringMain}>
          <h2>링기어</h2>
          <p>
            <strong>
              엠케이는 전기차에 들어가는 변속기용 링기어를 생산하고 있습니다.
            </strong>
          </p>
          <p>
            <strong>현재는 8속, 9속을 생산하고 있습니다.</strong>
          </p>
          <div className={ringStyle.ringImg}>
            <p>
              <img
                src="/ring169.jpg"
                alt="링기어 169"
                title="링기어 169"
                width="500"
                height="400"
              />
            </p>
            <p>
              <img
                src="/ring172.jpg"
                alt="링기어 172"
                title="링기어 172"
                width="500"
                height="400"
              />
            </p>
          </div>
          <div className={ringStyle.ringImg}>
            <p>
              <img
                src="/dvsring08.jpg"
                alt="dvs 링기어 08"
                title="dvs 링기어 08"
                width="500"
                height="400"
              />
            </p>
            <p>
              <img
                src="/dvsring11.jpg"
                alt="dvs 링기어 11"
                title="dvs 링기어 11"
                width="500"
                height="400"
              />
            </p>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Ring;
