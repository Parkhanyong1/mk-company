import ringStyle from 'styles/product/ring.module.css';

function Ring() {
  return (
    <div className={ringStyle.ringBody}>
      <div className={ringStyle.ringImg}>
        <img src="/images/product/ring.jpg" />
      </div>

      <div className={ringStyle.ringBlend}>
        ring <br />
        gear
      </div>

      <main className={ringStyle.ringMain}>
        <div className={ringStyle.ringH1}>링기어</div>
        <div className={ringStyle.ringP1}>
          <p>
            엠케이는 전기차에 들어가는 변속기용 링기어를 생산하고 있습니다.
            <br />
            현재는 8속, 9속을 생산하고 있습니다.
          </p>
        </div>
        <div className={ringStyle.imgBody}>
          <img
            className={ringStyle.Img}
            src="/images/product/ring169.jpg"
            alt="링기어 169"
            title="링기어 169"
          />

          <img
            className={ringStyle.Img}
            src="/images/product/ring172.jpg"
            alt="링기어 172"
            title="링기어 172"
          />
        </div>
        <div className={ringStyle.imgBody}>
          <img
            className={ringStyle.Img}
            src="/images/product/dvsring08.jpg"
            alt="dvs 링기어 08"
            title="dvs 링기어 08"
          />

          <img
            className={ringStyle.Img}
            src="/images/product/dvsring11.jpg"
            alt="dvs 링기어 11"
            title="dvs 링기어 11"
          />
        </div>
        <div className={ringStyle.explain1}>169번 링기어</div>
        <div className={ringStyle.explain2}>172번 링기어</div>
        <div className={ringStyle.explain3}>8번 dvs링기어</div>
        <div className={ringStyle.explain4}>11번 dvs링기어</div>
      </main>
    </div>
  );
}

export default Ring;
