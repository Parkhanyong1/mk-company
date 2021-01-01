import Layout from '../../container/common/layout';
import outinputStyle from '../../../styles/product/outinput.module.css';

function outinput() {
  return (
    <div>
      <Layout>
        <section>
          <nav className={outinputStyle.outinputNav}>
            <span>
              <h1>OUTPUT & INPUT GEAR</h1>
            </span>
          </nav>
          <main className={outinputStyle.outinputMain}>
            <h2>아웃풋 기어와 인풋 기어</h2>
            <p>
              엠케이는 자동차 트랜스미션에 들어가는 미션용 아웃풋기어,
              인풋기어를 생산하고 있습니다.
            </p>
            <p>
              <img
                src="/output209.jpg"
                alt="아웃풋 기어 209"
                title="아웃풋 기어 209"
              />
            </p>
            <p>
              <img
                src="/input198.jpg"
                alt="인풋 기어 198"
                title="인풋 기어 198"
              />
            </p>
          </main>
        </section>
      </Layout>
    </div>
  );
}

export default outinput;
