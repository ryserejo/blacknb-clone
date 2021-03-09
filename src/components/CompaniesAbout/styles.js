import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;

  @media (min-width: 992px) {
    grid-template-columns: 5fr 6fr;
  }
`;

export const ColumImages = styled.div``;

export const CompanyRatings = styled.div``;

export const RatingsTitle = styled.div``;

export const ColumAbout = styled.div``;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const CardContainer = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 4px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0px;
  width: 100%;
  min-width: auto;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: unset;
  text-align: unset;
  margin: unset;
`;
export const RateButtom = styled.button``;

export const CompanyInfos = styled.div`
  padding: 0 1.5rem;
`;

export const CompanyInfosContent = styled.div``;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    margin-bottom: 1.5rem;
  }
  > P {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
`;
export const Number = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    margin-bottom: 1.5rem;
  }
  > P {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    margin-bottom: 1.5rem;
  }
  > P {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
`;
export const SocialMediaContainer = styled.div``;

export const Site = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  > a {
    margin-left: 0.5rem;
    color: rgb(59, 46, 29);
    font-size: 14px;
  }
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    margin-bottom: 1.5rem;
  }
  > P {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
`;
export const ContactAppIcon = styled.img`
  width: 32px;
  height: 32px;
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    margin-bottom: 1.5rem;
  }
  > P {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
`;
export const OpeningTime = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: 0.5rem;
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
`;

export const DateTime = styled.div`
  width: 17rem;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  font-size: 14px;
  ${(props) =>
    props.active
      ? `> P {
    color: rgb(191, 133, 20);
    font-weight: bold;
  }`
      : ""}
`;

export const TimeInfos = styled.div`
  display: flex;
  flex-direction: column;
`;
