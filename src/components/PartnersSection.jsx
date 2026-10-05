import React from 'react';
import iclLogo from '../assets/icl.svg';
import tatneftLogo from '../assets/tatneft-logo.svg';

const partnersData = [
  {
    id: 1,
    name: "ICL",
    logo: iclLogo,
    website: "https://icl.ru",
    description: "ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, проектов и решений. Компания была основана в 1991 году и является 2ВМ Казанским производственным объединением вычислительных систем АО «ICL»."
  },
  {
    id: 2,
    name: "Татнефть",
    logo: tatneftLogo,
    website: "https://www.tatneft.ru",
    description: "«Татнефть» - одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтехимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур."
  }
];

const PartnersSection = () => {
  return (
    <section id="partners" className="partners-section">
      <h2 className="section-title">Партнеры</h2>
      <div className="partners-grid">
        {partnersData.map((partner) => (
          <div key={partner.id} className="partner-card">
              <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
              title={`Перейти на сайт ${partner.name}`}
            >
              ↗
            </a>
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
            <p className="partner-description">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;