import footerStyle from 'styles/footer.module.css';

const Footer = () => {
  return (
    <div>
      <footer className={footerStyle.footer}>
        <h1 className={footerStyle.footerH1}>(주)엠케이</h1>
        Address : 454 Chilbaek-ro, Geumho-eup, Yeongcheon-si, Gyeongsangbuk-do
        <p className={footerStyle.footerP}>Tel : 054-335-1501</p>
        <p className={footerStyle.footerP}>Fax : 054-338-1501</p>
      </footer>
    </div>
  );
};

export default Footer;
