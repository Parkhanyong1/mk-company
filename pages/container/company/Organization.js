import organizationStyle from 'styles/company/organization.module.css';

function Organization() {
  return (
    <div className={organizationStyle.organizationBody}>
      <div className={organizationStyle.organizationImg}>
        <img src="/images/company/organization.jpg" />
      </div>

      <div className={organizationStyle.organizationBlend}>
        organization
        <br />
        chart
      </div>

      <main className={organizationStyle.organizationMain}>
        <div className={organizationStyle.organizationH1}>
          (주)엠케이 조직도
        </div>

        <div className={organizationStyle.organizationTable}>
          <img
            src="/images/company/organizationtable.jpg"
            alt="회사 조직도"
            title="회사 조직도"
          />
        </div>
      </main>
    </div>
  );
}

export default Organization;
