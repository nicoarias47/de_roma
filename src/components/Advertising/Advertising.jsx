import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import modalimg from '../../assets/img/advertisingimg.svg';
import logo from '../../assets/icon/roma-logo.svg';

const Advertising = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenModal');
    if (!hasSeenModal) {
      setShow(true);
      localStorage.setItem('hasSeenModal', true);
    }
  }, []);

  const handleClose = () => setShow(false);

  // Esta linea borrara la info guardada en el local Storage, permitiendo ver el modal cada vez que se ingrese al home donde esta renderizado
  localStorage.removeItem('hasSeenModal');


  // Para el suscribe
  const initialState = {
    email: ""
  };
  const [form, setForm] = useState(initialState);
  //const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };


  return (<>

    <Modal id="modal" show={show} onHide={handleClose} >
      <Modal.Header className="w-100" closeButton ></Modal.Header>
      <div className='row'>
        <div className="modal-col-left col-xs-12 col-md-4 col-lg-4">
          <img className="img-logo-mobile" src={logo} />
          <img src={modalimg} />
        </div>
        <div className="modal-col-right col-xs-12 col-md-8 col-lg-8">
        <img className="img-logo-mobile2" src={logo} />
          <p className='body1'>Suscríbete a nuestro newsletter y recibe un  <b>10%  de descuento</b> en tu primera compra </p>
          <form className="suscribe-form-modal" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-email"
              onChange={handleChange}
              value={form.email}
              required
            />
            <input type="submit" value="Suscribirme" className="suscribe-button-modal" />
          </form>
        </div>
      </div>
    </Modal>

  </>
  );
};

export default Advertising;
