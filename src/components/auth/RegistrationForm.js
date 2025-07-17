import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegistrationForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Ім’я</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Електронна адреса</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
    </Form>
  );
}

export default RegistrationForm;
