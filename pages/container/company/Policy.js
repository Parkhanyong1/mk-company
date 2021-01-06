import policyStyle from 'styles/company/policy.module.css';

function Policy() {
  return (
    <div>
      <section>
        <nav className={policyStyle.policyNav}>
          <span className={policyStyle.navSpan}>
            <h1>
              MANAGEMENT
              <p>POLICY</p>
            </h1>
          </span>
        </nav>
        <main className={policyStyle.policyMain}>
          <h2>경영방침</h2>
          <p>
            엠케이는 안전, 복지, 품질, 성장, 기술의 5개 경영방침을 세우고 이를
            회사운영에 적용하고 있습니다.
          </p>
          <img src="/policytable.jpg" />
        </main>
      </section>
    </div>
  );
}

export default Policy;
