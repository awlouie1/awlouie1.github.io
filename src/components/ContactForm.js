import React from 'react'
import { Formik, Form, useField } from "formik"
import * as Yup from "yup"
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

import '../style.css'

const MyTextInput = ({ ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
      <div className={props.name}>

      {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
      ) : null} 
      <input className={"text-input " + field.name} {...field} {...props} />
      
      </div>
  );
};

const MyTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
      <div className={props.name}>
      {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
      ) : null} 
      <textarea className={"text-area " + field.name} {...field} {...props} />
      </div>
  );
};

class ContactForm extends React.Component {
  render() {
  const firebaseConfig = {
    apiKey: "AIzaSyCDilzJ4fX8w0TWEXeVvZJe2EiuElkJNNU",
    authDomain: "modulara.firebaseapp.com",
    projectId: "modulara",
    storageBucket: "modulara.appspot.com",
    messagingSenderId: "45981179999",
    appId: "1:45981179999:web:96b8ab0fef26281213bbea"
  };

  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);

  function sendToFire(firstName, lastName, email, message) {
    const db = getDatabase(firebase);
    push(ref(db, 'ContactMessages/'), {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message
    });
  }

    return (
      <div className={this.props.className}>
        <div className="contact-container">
          <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                message: '',
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
/*                         .max(15, 'Must be 15 characters or less') */
                    .required('Please enter your first name.'),
                lastName: Yup.string()
/*                         .max(15, 'Must be 15 characters or less') */
                    .required('Please enter your last name.'),
                email: Yup.string()
                    .email('Invalid email address.')
                    .required('Please enter your email address.'),
                message: Yup.string()
                    .required('Please enter your message.'),
            })}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, { setSubmitting }) => {
                
                    /******************************
                    API stuff, later maybe add confirmation email 
                    *******************************/
                   sendToFire(values.firstName, values.lastName, values.email, values.message);

                    document.getElementById("contactForm").style.display = "none"
                    document.getElementById('contact-form-succ').style.display = "flex"

                   setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);

            }}
          >
            
              {formik => (
                <Form id="contactForm">
                    <h2> Contact Us </h2>
                    <MyTextInput
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        maxLength="15"
                    />
                    <MyTextInput
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        maxLength="15"
                    /> 
                    <MyTextInput
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        maxLength="320"
/*                             onBlur={
                            // call the built-in handleBur
                            formik.validateOnBlur=false
                        }
                        onSubmit={formik.validateOnBlur=true} */
                    />
                    <MyTextArea
                        name="message"
                        type="text"
                        wrap="hard"
                        placeholder="Your Message"
                        maxLength="1024"
                    /> 
                    <div className="submit-div">
                      <button 
                          className="cancel-btn"  
                          type="reset"
                          onClick={() => this.props.setContactModalOff()}
                      > 
                      Cancel
                      </button>
                      <button 
                          className={!(formik.dirty) ? "submit-btn" : "submit-btn submit-btn-active"}  
                          type="submit"
                          disabled={!(formik.dirty)}
                      > 
                      Submit
                      </button>
                    </div>
                </Form>
              )}
          </Formik>
          <div id="contact-form-succ">The unanimous Declaration of the thirteen united States of America, When in the Course of human events, it becomes necessary for one people to dissolve the political bands which have connected them with another, and to assume among the powers of the earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle them, a decent respect to the opinions of mankind requires that they should declare the causes which impel them to the separation. </div>
        </div>


        <div className="contact-modal" onClick={() => this.props.setContactModalOff()} />
      </div>
    )
  }
}

export default ContactForm