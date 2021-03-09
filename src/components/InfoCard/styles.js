import styled from "styled-components";

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
export const CloseButton = styled.button`
  margin: 0.2rem;
  position: relative;
  position: absolute;
  z-index: 1;
  background: rgb(255, 255, 255);
  height: 30px;
  width: 30px;
  border-radius: 18px;
  border: none;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 4px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  position: relative;
  display: grid;
  gap: 2px;
  height: max-content;
  max-width: 100%;
  grid-template-columns: repeat(9, 1fr);
  :not(:last-child) {
    margin-bottom: 0px;
  }
`;
export const ImageBlockBigger = styled.div`
  height: 100%;
  width: 100%;
  grid-area: 1 / 1 / 3 / 6;
`;
export const ImageBlock = styled.div`
  width: 100%;
  height: 120px;
  grid-column: 6 / 10;
`;

export const ImageButton = styled.button`
  position: relative;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
  width: 100%;
  max-width: 500px;
  font-size: 14px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  font-family: Montserrat, sans-serif;
  height: 100%;
  padding: 0;
  margin: 0;
  cursor: default;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  > img {
    position: absolute;
    z-index: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const CompanyInfos = styled.div`
  padding: 0 1.5rem;
`;
export const CompanyInfosHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: unset;
  padding: 0px;
  text-align: unset;
  margin: 0;
  margin-bottom: 3rem;
`;
export const TitleContainer = styled.div`
  margin-top: 1rem;
  > h1 {
    margin: 0;
    padding: 0;
  }
`;
export const RatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  > h3 {
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: bold;
  }
`;
export const StarsContainer = styled.div`
  margin: 0;
`;
export const CompanyInfosContent = styled.div``;
export const About = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
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
  margin-bottom: 1rem;
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
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
  margin-bottom: 1rem;
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
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
  margin-bottom: 1rem;
  >a {
    margin-left: 0.5rem;
    color: rgb(59, 46, 29);
    font-size: 14px;
  }
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
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
  margin-bottom: 1rem;
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
  > P {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
`;
export const OpeningTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
  > h3 {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }
`;
export const TimeInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > P {
    color: rgb(191, 133, 20);
    font-weight: bold;
    margin: 0;
    margin-left: 10px;
    font-size: 14px;
  }
`;
export const Button = styled.div`
  margin: 1.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 5px;
  outline: none;
  border: none;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  background-color: rgb(59, 46, 29);
  color: rgb(255, 255, 255);
  filter: none;
  cursor: pointer;
`;
