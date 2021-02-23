import recruitmentStyle from 'styles/contact/recruitment.module.css';

function Recruitment() {
  return (
    <div className={recruitmentStyle.recruitmentBody}>
      <div className={recruitmentStyle.recruitmentImg}>
        <img src="/images/contact/recruitment.jpg" />
      </div>
      <div className={recruitmentStyle.recruitmentBlend}>recruitment</div>

      <main className={recruitmentStyle.recruitmentMain}>
        <div className={recruitmentStyle.recruitmentH1}>채용정보</div>

        <div className={recruitmentStyle.recruitmentH2}>채용 접수 방법</div>
        <div className={recruitmentStyle.recruitmentP1}>
          <p>
            -E-mail 접수 : jujw1501@hanmail.net으로 이력서 작성 후 접수해 주시기
            바랍니다.
          </p>
        </div>

        <div className={recruitmentStyle.recruitmentH3}>기타</div>
        <div className={recruitmentStyle.recruitmentP2}>
          <p>
            -합격자 통보는 이메일 및 휴대폰으로 연락하므로 기재해 주시기
            바랍니다.
            <br />
            기타 문의사항은 jujw1501@hanmail.net으로 문의주시길 바랍니다.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Recruitment;
