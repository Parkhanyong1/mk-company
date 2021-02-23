import indexStyle from 'styles/index.module.css';

const Index = () => (
  <div className={indexStyle.indexBody}>
    <div className={indexStyle.indexImg}>
      <img src="/main.jpg" />
    </div>
    <div className={indexStyle.indexBlend}>mk co., ltd.</div>

    <main className={indexStyle.indexMain}>
      <div className={indexStyle.indexH1}>what we do</div>
      <div className={indexStyle.indexP}>
        <p>
          저희 엠케이는 경북 영천시에 소재하고 있고 2019년 1월 21일에 설립되어
          <br />
          소프트웨어 개발 및 제작과 자동차 부품을 가공하여 공급하고 있습니다.
          <br />
          또 4차 산업시대에 발맞춰 부품 생산 자동화 시스템을
          <br />
          개발하려는 등 끊임없는 도전을 하고 있습니다.
        </p>
      </div>
    </main>
  </div>
);

export default Index;
