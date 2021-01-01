import Layout from '../../container/common/layout';
import certificationStyle from '../../../styles/company/certification.module.css';

function certification() {
  return (
    <div>
      <Layout>
        <section>
          <nav className={certificationStyle.certificationNav}>
            <span>
              <h1>CERTIFICATION</h1>
            </span>
          </nav>
          <main className={certificationStyle.certificationMain}>
            <h2>인증현황</h2>
            <img
              src="/certification3.jpg"
              alt="특허증"
              title="태양광발전시설물 고정유닛 제조방법 및 고정유닛"
            />
            <img
              src="/certification1.jpg"
              alt="특허증"
              title="부품 검사 및 모니터링 시스템"
            />
            <img
              src="/certification2.jpg"
              alt="특허증"
              title="링기어용 링 제조방법 및 링기어용 링"
            />
            <img
              src="/certification4.jpg"
              alt="디자인등록증"
              title="태양광패널 설치용 브라켓"
            />
            <img
              src="/certification5.jpg"
              alt="디자인등록증"
              title="연삭용 휠"
            />
            <img
              src="/certification6.jpg"
              alt="품질경영시스템인증서"
              title="자동차 및 산업용 금속 부품에 대한 정밀가공"
            />
            <img
              src="/certification7.jpg"
              alt="품질경영시스템인증서"
              title="자동차 및 산업용 금속 부품에 대한 정밀가공"
            />
            <img
              src="/certification10.jpg"
              alt="기업부설연구소인증서"
              title="(주)제이더블유 기술연구소"
            />
            <img
              src="/certification11.jpg"
              alt="기업부설연구소인증서"
              title="(주)엠케이 기업부설연구소"
            />
            <img
              src="/certification8.jpg"
              alt="벤처기업확인서"
              title="(주)제이더블유 벤처기업확인서"
            />
            <img
              src="/certification9.jpg"
              alt="벤처기업확인서"
              title="(주)엠케이 벤처기업확인서"
            />
          </main>
        </section>
      </Layout>
    </div>
  );
}

export default certification;
