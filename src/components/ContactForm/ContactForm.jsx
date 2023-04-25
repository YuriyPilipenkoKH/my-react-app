import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { handleSubmit } from '../../utils/submit';
import { FormCard } from './ContactForm.styled';


const schema = yup.object().shape({
    name: yup.string().required(),

})

export const ContactForm =() => {

    const initialValues= {
        name: '',

    }

      return (
     <Formik 
     initialValues={initialValues}
     onSubmit={handleSubmit}
     validationSchema={schema}
     >
         <FormCard autoComplete='off' >
            <label htmlFor='name'>
                Name
                <Field type='text' name='name'/>
                <ErrorMessage name="name" component="div"/>
            </label>
          
            <button type='submit'>Submit</button>
        </FormCard>

     </Formik>
       
      )
    
}