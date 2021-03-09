import {
  Container,
  BackButtonContainer,
  TitleContainer,
  TitleContent,
  RatingContainer,
  StarsContainer,
} from "./styles";

import RatingStar from '../RatingStar';

import CompanyNavbar from '../CompanyNavbar'

export default function CompaniesHeader({ data  }) {
  return (
    <Container>
      <BackButtonContainer>
        <button>{`< Voltar`}</button>
      </BackButtonContainer>
      <TitleContainer>
        <TitleContent>
          <h1>{data.name}</h1>
          <RatingContainer>
            <h3>{`${data.ratingScore}.0`}</h3>
            <StarsContainer>
              <RatingStar rating={data.ratingScore} />
            </StarsContainer>
          </RatingContainer>
        </TitleContent>
      </TitleContainer>
      <CompanyNavbar />
    </Container>
  );
}
