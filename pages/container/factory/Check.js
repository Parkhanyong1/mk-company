import checkStyle from 'styles/factory/check.module.css';

function Check() {
  return (
    <div className={checkStyle.checkBody}>
      <div className={checkStyle.checkImg}>
        <img src="/images/factory/checkfacilitymain.jpg" />
      </div>

      <div className={checkStyle.checkBlend}>
        check
        <br />
        facility
      </div>

      <main className={checkStyle.checkMain}>
        <div className={checkStyle.checkH1}>검사설비</div>

        <div className={checkStyle.imgBody}>
          <img
            className={checkStyle.Img}
            src="/images/factory/checkfacility2.jpg"
            alt="검사 설비 기계"
            title="검사 설비 기계"
          />
          <img
            className={checkStyle.Img}
            src="/images/factory/checkfacility1.jpg"
            alt="검사하는 모습"
            title="검사하는 모습"
          />
        </div>
        <div className={checkStyle.explain1}>검사 설비 기계</div>
        <div className={checkStyle.explain2}>검사하는 모습</div>
      </main>
    </div>
  );
}

export default Check;
