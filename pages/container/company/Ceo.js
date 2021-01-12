import ceoStyle from 'styles/company/ceo.module.css';

function Ceo() {
  return (
    <div>
      <section>
        <nav className={ceoStyle.ceoNav}>
          <span className={ceoStyle.navSpan}>
            <h1>CERTIFICATION</h1>
          </span>
        </nav>
        <main className={ceoStyle.ceoMain}>
          <h2>대표 인사말</h2>
          <p>
            <strong>
              엠케이는 정밀하고 오차 없는 부품을 생산하는 기본에 충실한 기업을
              목표하고 있습니다.
            </strong>
          </p>
          <p>
            <strong>
              이러한 기업 목표를 실현하기 위해 "기술 중심"과 "품질 우선"을
              기업철학으로 삼고
            </strong>
          </p>
          <p>
            <strong>
              도전, 성장, 복지를 기업 활동의 핵심가치로 여기면서 이를 실천하기
              위해 노력하고 있습니다.
            </strong>
          </p>
          <p>
            <strong>
              엠케이는 20 년간의 축적된 부품 가공 기술들로 정밀하고 오차 없는
              가공품을 생산하고 고객에게 제공할 수 있습니다.
            </strong>
          </p>

          <p>
            <strong>
              현재 자동화 시스템을 개발하려고 소프트웨어 개발부를 두어 운영하고
              있습니다.
            </strong>
          </p>
          <p>
            <strong>기술혁신, 인재 양성을 기반으로 현재에 만족하지 않고</strong>
          </p>
          <p>
            <strong>
              끊임없이 나아갈 것이며 좋은 품질의 제품을 공급하기 위해 노력하는
              기업이 될 것을 약속드립니다.
            </strong>
          </p>

          <p>
            <strong>감사합니다.</strong>
          </p>
        </main>
      </section>
    </div>
  );
}

export default Ceo;
