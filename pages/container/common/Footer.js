import footerStyle from 'styles/footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={footerStyle.footer}>
        <div className={footerStyle.footerH1}>
          <h1>(주)엠케이</h1>
        </div>
        <div className={footerStyle.footerP}>
          <p>
            <strong>Address</strong> : 454 Chilbaek-ro, Geumho-eup,
            Yeongcheon-si, Gyeongsangbuk-do
          </p>
          <p>
            <strong>Tel</strong> : 054-335-1501
          </p>
          <p>
            <strong>Fax</strong> : 054-338-1501
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
