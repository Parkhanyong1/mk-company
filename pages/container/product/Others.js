import othersStyle from 'styles/product/others.module.css';

function Others() {
  return (
    <div className={othersStyle.othersBody}>
      <div className={othersStyle.othersImg}>
        <img src="/images/product/others.jpg " />
      </div>
      <div className={othersStyle.othersBlend}>others</div>

      <main className={othersStyle.othersMain}>
        <div className={othersStyle.othersH1}>기타 기어</div>
        <div className={othersStyle.othersP1}>
          <p>
            엠케이는 Ring gear, Output gear, Input gear 외 다수의 기어류를
            생산하고 있습니다.
          </p>
        </div>
        <div className={othersStyle.imgBody}>
          <img
            className={othersStyle.Img}
            src="/images/product/flange61.jpg"
            alt="아웃풋 플랜지 61"
            title="아웃풋 플랜지 61"
          />

          <img
            className={othersStyle.Img}
            src="/images/product/parking264.jpg"
            alt="파킹 인터락 기어 264"
            title="파킹 인터락 기어 264"
          />
        </div>
        <div className={othersStyle.imgBody}>
          <img
            className={othersStyle.Img}
            src="/images/product/sun177.jpg"
            alt="선 기어 177"
            title="선 기어 177"
          />

          <img
            className={othersStyle.Img}
            src="/images/product/others1.jpg"
            alt="기타"
            title="기타"
          />
        </div>
        <div className={othersStyle.explain1}>61번 아웃풋 플랜지</div>
        <div className={othersStyle.explain2}>264번 파킹 인터락 기어</div>
        <div className={othersStyle.explain3}>177번 선 기어</div>
        <div className={othersStyle.explain4}>기타</div>
      </main>
    </div>
  );
}

export default Others;
