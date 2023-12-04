import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import style from "./ContactFormComponent.module.css";
import { clsx } from "clsx";
import ArrowColorComponent from "../ArrowColorComponent/ArrowColorComponent";

const Schema = Yup.object({
  fullName: Yup.string().required("Wrong Fullname"),
  email: Yup.string().email("Invalid email").required("Wrong Email"),
  phone: Yup.number().required("Wrong Phone"),
  message: Yup.mixed(),
});

export default function ContactFormComponent() {
  const {
    contactForm__wrap,
    form,
    position__wrap,
    form__label,
    form__input,
    form__textarea,
    button,
    form__error,
    error__color,
  } = style;

  return (
    <div className={contactForm__wrap}>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={Schema}
        onSubmit={(value, { resetForm }) => {
          console.log(value);
          resetForm();
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form className={form}>
              <div className={position__wrap}>
                <label className={form__label} htmlFor="fullName">
                  Full name:
                </label>
                <Field
                  className={clsx(
                    form__input,
                    errors.fullName && touched.fullName && error__color
                  )}
                  id="fullName"
                  name="fullName"
                  placeholder="John Rosie"
                />
                {errors.fullName && touched.fullName ? (
                  <p className={form__error}>{errors.fullName}</p>
                ) : null}
              </div>

              <div className={position__wrap}>
                <label className={form__label} htmlFor="email">
                  E-mail:
                </label>
                <Field
                  className={clsx(
                    form__input,
                    errors.email && touched.email && error__color
                  )}
                  id="email"
                  name="email"
                  placeholder="johnrosie@gmail.com"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <p className={form__error}>{errors.email}</p>
                ) : null}
              </div>

              <div className={position__wrap}>
                <label className={form__label} htmlFor="phone">
                  Phone:
                </label>
                <Field
                  className={clsx(
                    form__input,
                    errors.email && touched.email && error__color
                  )}
                  id="phone"
                  name="phone"
                  placeholder="380961234567"
                />
                {errors.phone && touched.phone ? (
                  <p className={form__error}>{errors.phone}</p>
                ) : null}
              </div>

              <div className={position__wrap}>
                <label className={form__label} htmlFor="message">
                  Message:
                </label>
                <Field
                  as="textarea"
                  className={clsx(form__input, form__textarea)}
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows="3"
                />
              </div>

              <button type="submit" className={button}>
                Send
                <ArrowColorComponent />
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
