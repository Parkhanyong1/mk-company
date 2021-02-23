import historyStyle from 'styles/company/history.module.css';

function History() {
  return (
    <div className={historyStyle.historyBody}>
      <div className={historyStyle.historyImg}>
        <img src="/images/company/history.jpg" />
      </div>

      <div className={historyStyle.historyBlend}>
        company <br /> history
      </div>

      <main className={historyStyle.historyMain}>
        <div className={historyStyle.historyH1}>회사연혁</div>
        <div className={historyStyle.historyP1}>
          <p>
            <div className={historyStyle.historyP2}>
              2019.01.21 (주)엠케이 설립
            </div>

            <div className={historyStyle.historyP2}>
              2020.09.01 소프트웨어 개발부 대구알파시티로 이전
            </div>
          </p>
        </div>
      </main>
    </div>
  );
}

export default History;
