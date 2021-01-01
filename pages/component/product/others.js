import Layout from '../../container/common/layout';
import othersStyle from '../../../styles/product/others.module.css';

function others() {
  return (
    <div>
      <Layout>
        <section>
          <nav className={othersStyle.othersNav}>
            <span>
              <h1>OTHER</h1>
            </span>
          </nav>
          <main className={othersStyle.othersMain}>
            <h2>OTHER</h2>
            <p>
              엠케이는 Ring gear, Output gear, Input gear 외 다수의 기어류를
              생산하고 있습니다.
            </p>
            <p>
              <img
                src="/flange61.jpg"
                alt="아웃풋 플랜지 61"
                title="아웃풋 플랜지 61"
              />
            </p>
            <p>
              <img
                src="/parking264.jpg"
                alt="파킹 인터락 기어 264"
                title="파킹 인터락 기어 264"
              />
            </p>
            <p>
              <img src="/sun177.jpg" alt="선 기어 177" title="선 기어 177" />
            </p>
            <p>
              <img src="/others1.jpg" alt="기타" title="기타" />
            </p>
          </main>
        </section>
      </Layout>
    </div>
  );
}

export default others;
