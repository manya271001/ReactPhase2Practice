import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from 'yup'
const roles=["tester","developer","sd1"]
const validation=Yup.object({
name:Yup.string()
.required('Name is required')
.min(2,'Name should be atleast 2 character'),
email:Yup.string()
.email('Invalid Email')
.required('Email is required'),
role:Yup.string()
.oneOf(roles,"enter valid role")
.required("enter role"),
pass:Yup.string()
.min(4,"Password Length should be 4 chracter minimum")
.required("Enter Pasword")
});

const MyForm=()=>{
    return(
        <>
        <Formik initialValues={{name:"",email:""}}
        validationSchema={validation}
          onSubmit={(values) => {
        alert(JSON.stringify(values,null,2))
        }}
        
        >
            {({isSubmitting})=>(

                <Form>
                    <div>
                        <label >Name</label>
                        <Field type="text" name="name"/>
                        <ErrorMessage name='name' component='div' />
                    </div>
                    <div>
                        <label >Email</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name='email' component='div' />
                    </div>
                     <div>
                        <label >Roles</label>
                        <Field type="role" name="role"/>
                        <ErrorMessage name='role' component='div' />
                    </div>
                     <div>
                        <label >Password</label>
                        <Field type="password" name="pass"/>
                        <ErrorMessage name='pass' component='div' />
                    </div>
                    <button type="submit" disabled={isSubmitting}>Submit</button>

                </Form>
            )}


        </Formik>
        </>
    )
}

export default MyForm;
