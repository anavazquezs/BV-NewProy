import { useRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import TextField from '../../helpers/formTextField';
import TextArea from '../../helpers/formTextArea';
import './Form.css';

const Formulario = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j55aweb', 'template_gy197qr', form.current, '3z3ygFesQ4_1V_7B1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const validate = Yup.object({
    nombre: Yup.string()
      .max(35, 'Debe tener 35 caracteres o menos')
      .required('Por favor ingresa un nombre'),
    correo: Yup.string()
      .email('El email es inválido')
      .required('Ingresa un correo electrónico'),
    asunto: Yup.string()
      .required('Por favor ingresa un asunto al mensaje'),
    mensaje: Yup.string()
      .required('Por favor ingresa un mensaje')
  })

  return (
    <div className='contenedor-form'>
      <h2>CONTACTANOS</h2>
      <div className='contenedor-form-form'>
        <Formik
          initialValues={{
            nombre: '',
            correo: '',
            asunto: '',
            mensaje: '',
          }}
          validationSchema={validate}
        >
          {formik => (
            <div>
              <Form className='formulario' onSubmit={sendEmail} ref={form}>
                  <TextField label='Nombre y apellido' name='nombre' type='text' placeholder='John Doe' />
                  <TextField label='Email' name='correo' type='text' placeholder='correo@correo.com' />
                  <TextField label='Asunto' name='asunto' type='text' placeholder='Escribe el asunto del mensaje' />
                  <TextArea label='Mensaje' name='mensaje' placeholder='Escribe tu mensaje' />
                  <div className='formulario-boton'>
                      <button id='bot-enviar' className='boton-enviar' type='submit'>ENVIAR</button>
                      <button className='boton-cancelar' type='reset'>DESCARTAR</button>
                  </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
  </div>
  )
}

export default Formulario;