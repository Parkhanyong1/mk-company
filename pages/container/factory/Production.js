import productionStyle from 'styles/factory/production.module.css';

function Production() {
  return (
    <div className={productionStyle.productionBody}>
      <div className={productionStyle.productionImg}>
        <img src="/images/factory/facilitymain.jpg" />
      </div>
      <div className={productionStyle.productionBlend}>
        production
        <br />
        facility
      </div>

      <main className={productionStyle.productionMain}>
        <div className={productionStyle.productionH1}>생산 설비</div>
        <div className={productionStyle.imgBody}>
          <img
            className={productionStyle.Img}
            src="/images/factory/productionfacility1.jpg"
            alt="아웃풋 기어 생산 기계"
            title="아웃풋 기어 생산 기계"
          />

          <img
            className={productionStyle.Img}
            src="/images/factory/productionfacility2.jpg"
            alt="링 기어 생산 기계"
            title="링 기어 생산 기계"
          />

          <img
            className={productionStyle.Img}
            src="/images/factory/productionfacility3.jpg"
            alt="인풋 기어 생산 기계"
            title="인풋 기어 생산 기계"
          />

          <img
            className={productionStyle.Img}
            src="/images/factory/productionfacility4.jpg"
            alt="아웃풋 플랜지 생산 기계"
            title="아웃풋 플랜지 생산 기계"
          />
        </div>
        <div className={productionStyle.explain1}>아웃풋 기어 생산 기계</div>
        <div className={productionStyle.explain2}>링 기어 생산 기계</div>
        <div className={productionStyle.explain3}>인풋 기어 생산 기계</div>
        <div className={productionStyle.explain4}>아웃풋 플랜지 생산 기계</div>
      </main>
    </div>
  );
}

export default Production;
