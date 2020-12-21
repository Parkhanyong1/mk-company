// import Link from 'next/link';
import Layout from '../pages/container/common/layout';
import css from '../pages/_app';

const Index = () => (
  <div>
    <Layout>
      <section>
        <nav>
          <span>MK Co., Ltd.</span>
        </nav>
        <main>
          <h2>What We Do</h2>
          <p>
            저희 엠케이는 경북 영천시에 소재하고 있고 2019년 1월 21일에 설립되어
          </p>
          <p>
            소프트웨어 개발 및 제작과 자동차 부품을 가공하여 공급하고 있습니다.
          </p>
          <p>
            또 4차 산업시대에 발맞춰 부품 생산 자동화 시스템을 개발하려는 등
            끊임없는 도전을 하고 있습니다.
          </p>
        </main>
      </section>
    </Layout>
  </div>
);

export default Index;
