import React from 'react';
import {ErrorMessage, Formik, useFormik} from 'formik';
import { Mform } from './Formik.styled';
import { Mbtn } from './Formik.styled';

export const FormikLib = () => {
 
return (<div>


<Mform autoComplete='off'>
    <label>email:
        <input
         type ='email'
         name = 'email'
        />
    </label>
    <p></p>

    <label>password:
        <input
        type="password"
        name="password"
        />
    </label>
    <p></p>

    <Mbtn
     type="submit"
    >Submit</Mbtn>
</Mform>

</div>)
}