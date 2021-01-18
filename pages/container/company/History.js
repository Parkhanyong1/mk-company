import historyStyle from 'styles/company/history.module.css';

function History() {
  return (
    <div>
      <section>
        <nav className={historyStyle.historyNav}>
          <span className={historyStyle.navSpan}>
            <h1>COMPANY HISTORY</h1>
          </span>
        </nav>
        <main className={historyStyle.historyMain}>
          <h2>회사연혁</h2>
          <br></br>
          <p>
            <strong>2019.01.21 (주)엠케이 설립</strong>
          </p>
          <p>
            <strong>2020.09.01 소프트웨어 개발부 대구알파시티로 이전</strong>
          </p>
        </main>
      </section>
    </div>
  );
}

export default History;
