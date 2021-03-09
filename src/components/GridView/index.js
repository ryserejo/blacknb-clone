import { Content } from "../Header/style";

import Card from "../Card";
import InfoCard from "../InfoCard";
import SerachForm from "../SerachForm";
import {
  Container,
  ColumCardsHeader,
  ColumCardsContents,
  ColumCards,
  ColumInfos,
} from "./styles";
import { useState } from "react";
import { typeOf } from "react-is";

export default function GridView({ companies }) {
  const [infoCardVisibility, setInfoCardVisibility] = useState(false);
  const [cardData, setCardData] = useState();
  const cardClicks = (data) => {
    console.log(data);
    setCardData(data);
    setInfoCardVisibility(true);
  };

  return (
    <Container>
      <ColumCards>
        <ColumCardsHeader>
          <h1>Empresas</h1>
          <span>{`Nós encontramos ${companies.length} ${
            companies.length > 1 ? "empresas para você" : "empresa para você"
          }`}</span>
        </ColumCardsHeader>
        <ColumCardsContents>
          {companies.map((data, index) => (
            <Card
            data={data}
              eventClickFunction={cardClicks}
              TitleText={data.name}
              key={index}
              ImageSRC={data.images.urls[0]}
            />
          ))}
        </ColumCardsContents>
      </ColumCards>
      <ColumInfos>
        <SerachForm />
        {infoCardVisibility ? (
          <InfoCard data={cardData} eventClickFunction={setInfoCardVisibility} />
        ) : (
          <></>
        )}
      </ColumInfos>
    </Container>
  );
}
