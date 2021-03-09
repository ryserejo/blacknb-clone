import {
  GridContainer,
  ColumImages,
  CompanyRatings,
  RatingsTitle,
  ContentContainer,
  ColumAbout,
  RateButtom,
  CompanyInfos,
  DateTime,
  CompanyInfosContent,
  About,
  Number,
  Contact,
  ContactAppIcon,
  Address,
  OpeningTime,
  TimeInfos,
  SocialMediaContainer,
  Site,
} from "./styles";

import RatingStar from '../RatingStar'
import PicturesGallery from "../PicturesGallery";

export default function CompaniesAbout({data = {ratingScore: 5, contact: {socialmedias: ['whatsapp', 'messenger']}}}) {
  return (
    <GridContainer>
      <ColumImages>
        <PicturesGallery />
        <CompanyRatings>
          <RatingsTitle>
            <h2>Avaliações de Analise Comercial </h2>
          </RatingsTitle>
          <RateButtom>Avalie essa empresa</RateButtom>
        </CompanyRatings>
      </ColumImages>
      <ColumAbout>
        <ContentContainer>
          <CompanyInfos>
            <CompanyInfosContent>
              <About>
                <h3>Sobre:</h3>
                <p>{data.about}</p>
              </About>
              <Number>
                <h3>Telefone:</h3>
                <p>{data.telephone}</p>
              </Number>
              <Site>
                <h3>Site:</h3>
                <a href={data.site}>{data.site}</a>
              </Site>
              <Contact>
                <h3>Contato:</h3>
                <SocialMediaContainer>
                  {data.contact.socialmedias.map((medias, index) => {
                    switch (medias) {
                      case "whatsapp":
                        return (
                          <ContactAppIcon
                            key={index}
                            src="/images/whatsappIcon.svg"
                          />
                        );
                        break;
                      case "messenger":
                        return (
                          <ContactAppIcon
                            key={index}
                            src="/images/messengerIcon.svg"
                          />
                        );
                        break;
                      default:
                        break;
                    }
                  })}
                </SocialMediaContainer>
              </Contact>
              <Address>
                <h3>Endereço:</h3>
                <p>{data.address}</p>
              </Address>
              <OpeningTime>
                <h3>Horário de Abertura:</h3>
                <TimeInfos>
                  <DateTime active>
                    <p>Segunda-feira</p>
                    <p>{`${data.openingtime.days[0].starthour} - ${data.openingtime.days[0].endhour}`}</p>
                  </DateTime>
                  <DateTime>
                    <p>Terça-feira</p>
                    <p>{`${data.openingtime.days[0].starthour} - ${data.openingtime.days[0].endhour}`}</p>
                  </DateTime>
                  <DateTime>
                    <p>Quarta-feira</p>
                    <p>{`${data.openingtime.days[0].starthour} - ${data.openingtime.days[0].endhour}`}</p>
                  </DateTime>
                  <DateTime>
                    <p>Quinta-feira</p>
                    <p>{`${data.openingtime.days[0].starthour} - ${data.openingtime.days[0].endhour}`}</p>
                  </DateTime>
                  <DateTime>
                    <p>Sexta-feira</p>
                    <p>{`${data.openingtime.days[0].starthour} - ${data.openingtime.days[0].endhour}`}</p>
                  </DateTime>
                  <DateTime>
                    <p>Sábado</p>
                    <p>{`${data.openingtime.days[0].starthour} - ${data.openingtime.days[0].endhour}`}</p>
                  </DateTime>
                </TimeInfos>
              </OpeningTime>
            </CompanyInfosContent>
          </CompanyInfos>
        </ContentContainer>
      </ColumAbout>
    </GridContainer>
  );
}
