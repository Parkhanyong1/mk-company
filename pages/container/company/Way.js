import wayStyle from 'styles/company/way.module.css';

function Way() {
  return (
    <div className={wayStyle.wayBody}>
      <div className={wayStyle.wayImg}>
        <img src="/images/company/way.jpg" />
      </div>

      <div className={wayStyle.wayBlend}>way to find</div>

      <main className={wayStyle.wayMain}>
        <div className={wayStyle.wayH1}>찾아오는 길</div>

        <div className={wayStyle.wayH2}>구글 지도</div>

        <iframe
          className={wayStyle.wayIframe}
          title="factorymap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25853.668384001423!2d128.90613255010763!3d35.90515317911477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3566695f8d13783f%3A0xc4d015799470ebf8!2z6rK97IOB67aB64-EIOyYgeyynOyLnCDquIjtmLjsnY0g7Lmg67Cx66Gc!5e0!3m2!1sko!2skr!4v1600909320067!5m2!1sko!2skr"
          frameborder="0"
          border="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        />
        <div className={wayStyle.wayH3}>address</div>

        <div className={wayStyle.wayP1}>
          <p>경상북도 영천시 금호읍 칠백로 454</p>
        </div>

        <div className={wayStyle.wayH4}>transfortation</div>

        <div className={wayStyle.wayP2}>
          <p>
            경부고속도로
            <br />
            중앙고속도로(대구-부산)-동대구분기점 방면-경산,부산,경주
            경부고속도로 방면-영천IC-도남공단삼거리-칠백로
          </p>
        </div>
      </main>
    </div>
  );
}

export default Way;
