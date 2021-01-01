import Layout from '../../container/common/layout';
import wayStyle from '../../../styles/company/way.module.css';

function way() {
  return (
    <div>
      <Layout>
        <section>
          <nav className={wayStyle.wayNav}>
            <span className={wayStyle.navSpan}>
              <h1>WAY TO FIND</h1>
            </span>
          </nav>
          <main className={wayStyle.wayMain}>
            <h2>찾아오는 길</h2>
            <h3>구글 지도</h3>
            <iframe
              title="factorymap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25853.668384001423!2d128.90613255010763!3d35.90515317911477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3566695f8d13783f%3A0xc4d015799470ebf8!2z6rK97IOB67aB64-EIOyYgeyynOyLnCDquIjtmLjsnY0g7Lmg67Cx66Gc!5e0!3m2!1sko!2skr!4v1600909320067!5m2!1sko!2skr"
              width="400"
              height="300"
              frameborder="0"
              border="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
            <h2>ADDRESS</h2>
            <p>경상북도 영천시 금호읍 칠백로 454</p>
            <h2>TRANSPORTATION</h2>
            <p>경부고속도로</p>
            <p>
              중앙고속도로(대구-부산)-동대구분기점 방면-경산,부산,경주
              경부고속도로 방면-영천IC-도남공단삼거리-칠백로
            </p>
          </main>
        </section>
      </Layout>
    </div>
  );
}

export default way;
