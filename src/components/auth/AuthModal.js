import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import '../style/AuthModal.css';

export function AuthModal({showModal, setShowModal, activeTab, setActiveTab}) {

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Авторизація</Modal.Title>
        </Modal.Header>

        <div className="tabs">
          <button
            className={activeTab === "login" ? "tab active" : "tab"}
            onClick={() => setActiveTab("login")}
          >
            Вхід
          </button>
          <button
            className={activeTab === "registration" ? "tab active" : "tab"}
            onClick={() => setActiveTab("registration")}
          >
            Реєстрація
          </button>
        </div>

        <Modal.Body>
          {activeTab === "login" ? <LoginForm /> : <RegistrationForm />}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрити
          </Button>
          <Button variant="primary">
            {activeTab === "login" ? "Увійти" : "Зареєструватися"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AuthModal;
