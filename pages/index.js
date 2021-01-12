import indexStyle from 'styles/index.module.css';

const Index = () => (
  <div>
    <section>
      <nav className={indexStyle.indexImage}>
        <span className={indexStyle.indexBlend}>MK Co., Ltd.</span>
      </nav>
      <main className={indexStyle.indexMain}>
        <h2>What We Do</h2>
        <p>
          <strong>
            저희 엠케이는 경북 영천시에 소재하고 있고 2019년 1월 21일에 설립되어
          </strong>
        </p>

        <p>
          <strong>
            소프트웨어 개발 및 제작과 자동차 부품을 가공하여 공급하고 있습니다.
          </strong>
        </p>
        <p>
          <strong>
            또 4차 산업시대에 발맞춰 부품 생산 자동화 시스템을 개발하려는 등 끊
            임없는 도전을 하고 있습니다.
          </strong>
        </p>
      </main>
    </section>
  </div>
);

export default Index;
