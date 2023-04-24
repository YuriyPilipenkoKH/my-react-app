import PropTypes from 'prop-types';
import { Formik, Form, Field} from 'formik';
import {FormCard} from  './LoginForm.styled'
import { handleSubmit } from '../../utils/submit';

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
     >
         <FormCard autoComplete='off' >
            <label htmlFor='login'>
                Login
                <Field type='text' name='login'/>
            </label>
            <label htmlFor='password'>
                Password
                <Field type='password' name='password'/>
            </label>
            <button type='submit'>Submit</button>
        </FormCard>

     </Formik>
       
      )
    
}