import { Form, Input, Button } from "./styles";

export default function SerachForm({ nobutton }) {
  return (
      <Form>
        <Input 
        type="text"
        placeholder="Buscar por empresa..."
        />
        {nobutton? <></> : <Button>Buscar</Button>}
      </Form>
  );
}
