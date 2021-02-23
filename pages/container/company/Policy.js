import policyStyle from 'styles/company/policy.module.css';

function Policy() {
  return (
    <div className={policyStyle.policyBody}>
      <div className={policyStyle.policyImg}>
        <img src="/images/company/policy.jpg" />
      </div>

      <div className={policyStyle.policyBlend}>
        management
        <br />
        policy
      </div>

      <main className={policyStyle.policyMain}>
        <div className={policyStyle.policyH1}>경영방침</div>

        <div className={policyStyle.policyP}>
          <p>
            엠케이는 안전, 기술, 품질, 성장, 효율의 5개 경영방침을 세우고 이를
            회사운영에 적용하고 있습니다.
          </p>
        </div>

        <div className={policyStyle.policyTable}>
          <img src="/images/company/policytable.jpg" />
        </div>
      </main>
    </div>
  );
}

export default Policy;
