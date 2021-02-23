import certificationStyle from 'styles/company/certification.module.css';

function Certification() {
  return (
    <div className={certificationStyle.certificationBody}>
      <div className={certificationStyle.certificationImg}>
        <img src="/images/company/certification.jpg" />
      </div>

      <div className={certificationStyle.certificationBlend}>certification</div>

      <main className={certificationStyle.certificationMain}>
        <div className={certificationStyle.certificationH1}>인증현황</div>

        <div className={certificationStyle.imgBody}>
          <img
            className={certificationStyle.Img}
            src="/images/company/certification1.jpg"
            alt="특허증"
            title="태양광발전시설물 고정유닛 제조방법 및 고정유닛"
          />
          <img
            className={certificationStyle.Img}
            src="/images/company/certification2.jpg"
            alt="특허증"
            title="부품 검사 및 모니터링 시스템"
          />
          <img
            className={certificationStyle.Img}
            src="/images/company/certification3.jpg"
            alt="특허증"
            title="링기어용 링 제조방법 및 링기어용 링"
          />
        </div>
        <div className={certificationStyle.imgBody}>
          <img
            className={certificationStyle.Img}
            src="/images/company/design1.jpg"
            alt="디자인등록증"
            title="태양광패널 설치용 브라켓"
          />
          <img
            className={certificationStyle.Img}
            src="/images/company/design2.jpg"
            alt="디자인등록증"
            title="연삭용 휠"
          />
          <img
            className={certificationStyle.Img}
            src="/images/company/qualitymk.jpg"
            alt="품질경영시스템인증서"
            title="자동차 및 산업용 금속 부품에 대한 정밀가공"
          />
        </div>
        <div className={certificationStyle.imgBody}>
          <img
            className={certificationStyle.Img}
            src="/images/company/qualityjw.jpg"
            alt="품질경영시스템인증서"
            title="자동차 및 산업용 금속 부품에 대한 정밀가공"
          />
          <img
            className={certificationStyle.Img}
            src="/images/company/labmk.jpg"
            alt="기업부설연구소인증서"
            title="(주)엠케이 기술연구소"
          />
          <img
            className={certificationStyle.Img}
            src="/images/company/labjw.jpg"
            alt="기업부설연구소인증서"
            title="(주)제이더블유 기술연구소"
          />
        </div>
        <div className={certificationStyle.imgBody}>
          <img
            className={certificationStyle.Img}
            src="/images/company/venturemk.jpg"
            alt="벤처기업확인서"
            title="(주)엠케이 벤처기업확인서"
          />

          <img
            className={certificationStyle.Img}
            src="/images/company/venturejw.jpg"
            alt="벤처기업확인서"
            title="(주)제이더블유 벤처기업확인서"
          />
        </div>
        <div className={certificationStyle.explain1}>
          특허증
          <br />
          태양광발전시설물 고정유닛 제조방법 및 고정유닛
        </div>
        <div className={certificationStyle.explain2}>
          특허증
          <br />
          부품 검사 및 모니터링 시스템
        </div>
        <div className={certificationStyle.explain3}>
          특허증
          <br />
          링기어용 링 제조방법 및 링기어용 링
        </div>
        <div className={certificationStyle.explain4}>
          디자인등록증
          <br />
          태양광패널 설치용 브라켓
        </div>
        <div className={certificationStyle.explain5}>
          디자인등록증
          <br />
          연삭용 휠
        </div>
        <div className={certificationStyle.explain6}>
          품질경영시스템인증서
          <br />
          자동차 및 산업용 금속 부품에 대한 정밀가공
        </div>
        <div className={certificationStyle.explain7}>
          품질경영시스템인증서
          <br />
          자동차 및 산업용 금속 부품에 대한 정밀가공
        </div>
        <div className={certificationStyle.explain8}>
          기업부설연구소인증서
          <br />
          (주)엠케이 기술연구소
        </div>
        <div className={certificationStyle.explain9}>
          기업부설연구소인증서
          <br />
          (주)제이더블유 기업부설연구소
        </div>
        <div className={certificationStyle.explain10}>
          벤처기업확인서
          <br />
          (주)엠케이 벤처기업확인서
        </div>
        <div className={certificationStyle.explain11}>
          벤처기업확인서
          <br />
          (주)제이더블유 벤처기업확인서
        </div>
      </main>
    </div>
  );
}

export default Certification;
