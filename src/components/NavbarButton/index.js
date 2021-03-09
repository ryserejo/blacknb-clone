import {useState} from 'react';
import { Button, ButtonContent, Badge } from "./styles";

export default function NavbarButton({i, active, index, title, badge, eventClickFunction }) {
  return (
    <Button active={active} onClick={() => eventClickFunction(i)}>
      <ButtonContent>
        {badge ? (index > 0? <Badge>{index}</Badge> : <></>) : <></>}
        <span>{title}</span>
      </ButtonContent>
    </Button>
  );
}
