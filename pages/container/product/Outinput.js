import outinputStyle from 'styles/product/outinput.module.css';

function Outinput() {
  return (
    <div className={outinputStyle.outinputBody}>
      <div className={outinputStyle.outinputImg}>
        <img src="/images/product/outinput.jpg" />
      </div>

      <div className={outinputStyle.outinputBlend}>
        output & <br />
        input gear
      </div>

      <main className={outinputStyle.outinputMain}>
        <div className={outinputStyle.outinputH1}>아웃풋 기어와 인풋 기어</div>
        <div className={outinputStyle.outinputP1}>
          엠케이는 자동차 트랜스미션에 들어가는 미션용 아웃풋기어, 인풋기어를
          생산하고 있습니다.
        </div>
        <div className={outinputStyle.imgBody}>
          <img
            className={outinputStyle.Img}
            src="/images/product/output209.jpg"
            alt="아웃풋 기어 209"
            title="아웃풋 기어 209"
          />

          <img
            className={outinputStyle.Img}
            src="/images/product/input198.jpg"
            alt="인풋 기어 198"
            title="인풋 기어 198"
          />
        </div>
        <div className={outinputStyle.explain1}>209번 아웃풋 기어</div>
        <div className={outinputStyle.explain2}>198번 인풋 기어</div>
      </main>
    </div>
  );
}

export default Outinput;
