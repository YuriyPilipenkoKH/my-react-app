import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import {FormCard} from  './LoginForm.styled'
import { handleSubmit } from '../../utils/submit';
import * as yup from 'yup'

const schema = yup.object().shape({
    login: yup.string().required(),
    password: yup.string().min(6).max(12).required(),
})

export const LoginForm =() => {
    // const handleSubmit =(e) => { 
    //     e.preventDefault()
    //     const {login, password} = e.target.elements;
    //     console.log(login.value); 

    //   console.log(e.target.elements.login.value);
    //   console.log(e.target.elements.password.value);

    const initialValues= {
        login: 'Yura',
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
                Login
                <Field type='text' name='login'/>
                <ErrorMessage name="login" component="div"/>
            </label>
            <label htmlFor='password'>
                Password
                <Field type='password' name='password'/>
                <ErrorMessage name="password" component="div"/>
            </label>
            <button type='submit'>Submit</button>
        </FormCard>

     </Formik>
       
      )
    
}