import RatingStar from "../RatingStar";
import Link from "next/link";

import {
  Container,
  CardContainer,
  ContentContainer,
  CloseButton,
  Header,
  ImageBlock,
  CompanyInfos,
  CompanyInfosHeader,
  TitleContainer,
  RatingContainer,
  StarsContainer,
  CompanyInfosContent,
  About,
  Number,
  Contact,
  ContactAppIcon,
  Address,
  OpeningTime,
  TimeInfos,
  Button,
  ImageBlockBigger,
  ImageButton,
  SocialMediaContainer,
  Site,
} from "./styles";
import { useState } from "react";

export default function InfoCard({ eventClickFunction, data }) {
  return (
    <Container>
      <CardContainer>
        <ContentContainer>
          <CloseButton onClick={() => eventClickFunction(false)}>X</CloseButton>
          <Header>
            <ImageBlockBigger>
              <ImageButton>
                <img src={data.images.urls[0]} />
              </ImageButton>
            </ImageBlockBigger>
            <ImageBlock>
              <ImageButton>
                <img src={data.images.urls[1]} />
              </ImageButton>
            </ImageBlock>
            <ImageBlock>
              <ImageButton>
                <img src={data.images.urls[2]} />
              </ImageButton>
            </ImageBlock>
          </Header>
          <CompanyInfos>
            <CompanyInfosHeader>
              <TitleContainer>
                <h1>{data.name}</h1>
              </TitleContainer>
              <RatingContainer>
                <h3>{`${data.ratingScore}.0`}</h3>
                <StarsContainer>
                  <RatingStar rating={data.ratingScore} />
                </StarsContainer>
              </RatingContainer>
            </CompanyInfosHeader>
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
                  <p>{data.openingtime.days[0].day}</p>
                  <p>{`${data.openingtime.days[0].starthour} - ${data.openingtime.days[0].endhour}`}</p>
                </TimeInfos>
              </OpeningTime>
            </CompanyInfosContent>
          </CompanyInfos>
        </ContentContainer>
        <Link href={`/companies/${data.id}`}>
          <Button>Mostrar mais</Button>
        </Link>
      </CardContainer>
    </Container>
  );
}
