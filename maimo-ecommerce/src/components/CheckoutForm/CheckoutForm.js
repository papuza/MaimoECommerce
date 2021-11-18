import React from 'react';
import { Container } from './styled'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const CheckoutForm = ({ handleSubmit }) => (
    <Container>
        <div>
            <Formik
                initialValues={{ email: '', name: '', phone: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Please enter your name';
                    }
                    if (!values.phone) {
                        errors.phone = 'Please tell us your phone';
                    }
                    if (!values.email) {
                        errors.email = 'We need to know your mail';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'mmm... this mail is not valid';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        handleSubmit(values)
                        setSubmitting(false);
                    }, 200);
                }}
            >
                {({ isSubmitting }) => (
                    <Form id='my-form'>
                        <Field placeholder="Name" type="text" name="name" />
                        <ErrorMessage name="name" component="span" />
                        <Field placeholder="Email" type="email" name="email" />
                        <ErrorMessage name="email" component="span" />
                        <Field placeholder="Phone" type="text" name="phone" />
                        <ErrorMessage name="phone" component="span" />
                        <button type="submit" disabled={isSubmitting}>Enviar orden</button>
                    </Form>
                )}
            </Formik>
        </div>
    </Container>
);
export default CheckoutForm;