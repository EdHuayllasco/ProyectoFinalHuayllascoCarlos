import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, FormControl, FormLabel, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { useAuth } from '../context/index';

export const Login = () => {

  const { signIn, setForm } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().email('Correo electrónico inválido').required('Ingrese un correo electrónico'),
    password: yup.string()
    .required("Ingrese una contraseña")
    .min(8,"La contraseña debe tener minímo 8 caracteres")
  });

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          signIn(values);
        }}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-2">
                <FormLabel>Correo Electrónico</FormLabel>
                <Field
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  as={FormControl}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                  />
                <ErrorMessage 
                  name='email'
                  component="div"
                  className='text-danger'
                  />
              </FormGroup>
              <FormGroup className="mb-2">
                <FormLabel>Contraseña</FormLabel>
                <Field
                  type="password"
                  name="password"
                  value={values.password}
                  as={FormControl}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                />

                <ErrorMessage
                  name='password'
                  component="div"
                  className='text-danger'
                  />
              </FormGroup>
              <FormGroup className="mb-2">
                <span>¿Aún no tienes una cuenta?  
                  <a href='#' onClick={() => setForm('register')}>
                     Crear cuenta
                  </a>
                </span>
              </FormGroup>
              <Button type="submit">Iniciar Sesión</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
