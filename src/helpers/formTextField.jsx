import { ErrorMessage, useField } from 'formik';
import '../screens/Form/Form.css';

function TextField( { label, ...props } ) {
    const [ field, meta ] = useField(props);
  return (
    <div className='formulario-textfield'>
        <label htmlFor={field.name}>{label}</label> <br/>
        <input
            className={`${meta.touched && meta.error && 'is-invalid'}`} 
            {...field}{...props} 
            autoComplete='off' 
        />
        <ErrorMessage component="div" name={field.name} className='error' />
    </div>
  )
}

export default TextField;