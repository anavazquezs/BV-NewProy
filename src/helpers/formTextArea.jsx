import { ErrorMessage, useField } from 'formik';
import '../screens/Form/Form.css';

function TextArea( { label, ...props } ) {
    const [field, meta] = useField(props);
  return (
    <div className='formulario-textarea'>
        <label htmlFor={field.name}>{label}</label> <br/>
        <textarea 
            id='mensaje' 
            cols='90' 
            rows='10'
            className={`${meta.touched && meta.error && 'is-invalid'}`}
            {...field}{...props} 
            autoComplete='off' 
        />
        <ErrorMessage component="div" name={field.name} className='error' />
    </div>
  )
}

export default TextArea;