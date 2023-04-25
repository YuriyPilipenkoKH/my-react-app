import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormCard } from './ContactForm.styled';
// import { nanoid } from 'nanoid';
// let id = nanoid()
// console.log(id);

export class ContactForm extends Component  {
    state = {
        contacts: [],
        name: '',
        number: ''
      }

    schema = yup.object().shape({
        name: yup.string().required(),
        number: yup.number().required(),
    })

    initialValues= {
        name: '',
        number: '',
    }

    handleChange = name => e => {
        const { target } = e;
    
        this.setState(() => ({
          [name]: target.value,
        }));
    };

    handleSubmit ( e)  {
        e.preventDefault();
    
        const { onSubmit } = this.props;
        onSubmit(this.state);
        this.resetForm();
        console.log(this.state);
    };

    resetForm = () => {
        this.setState(() => ({
          name: '',
          number: '',
        }));
    };


    render() {
        return(
            <Formik 
            initialValues={this.initialValues}
            onSubmit={this.handleSubmit}
            validationSchema={this.schema}
            >
                <FormCard autoComplete='off' >
                   <label htmlFor='name'>
                       Name
                       <Field type='text' name='name'/>
                       <ErrorMessage name="name" component="div"/>
                   </label>
                   <label htmlFor='number'>
                       Number
                       <Field type='text' name='number'/>
                       <ErrorMessage name="number" component="div"/>
                   </label>
                 
                   <button type='submit'>Add contact</button>
               </FormCard>
       
            </Formik>

        )
    } 
    
}