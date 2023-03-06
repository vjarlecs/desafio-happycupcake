import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="ingresa@tu.email" />
        <Form.Text className="text-muted">
        Nunca compartiremos tu correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" placeholder="Escribe aquí tu requerimiento..." rows={3} />
      </Form.Group>
      <Button variant="success" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Formulario;