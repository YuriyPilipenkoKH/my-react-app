import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { handleSubmit } from '../../utils/submit';
import { FormCard } from './ContactForm.styled';


const schema = yup.object().shape({
    name: yup.string().required(),

})

export const ContactForm =() => {

    const initialValues= {
        login: '',
        password: '',
    }

      return (
     <Formik 
     initialValues={initialValues}
     onSubmit={handleSubmit}
     validationSchema={schema}
     >
         <FormCard autoComplete='off' >
            <label htmlFor='login'>
                Name
                <Field type='text' name='login'/>
                <ErrorMessage name="login" component="div"/>
            </label>
          
            <button type='submit'>Submit</button>
        </FormCard>

     </Formik>
       
      )
    
}