import { Formik, Field, Form } from "formik";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import style from "./SectionContactForm.module.css";

export default function SectionContactForm() {
  const {
    contactForm__section,
    contactForm__wrap,
    form,
    form__label,
    form__input,
    button__wrap,
  } = style;

  return (
    <section className={contactForm__section}>
      <div className={contactForm__wrap}>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phone: "",
            message: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className={form}>
            <label className={form__label} htmlFor="fullName">
              Full name:
            </label>
            <Field
              className={form__input}
              id="fullName"
              name="fullName"
              placeholder="John Rosie"
            />

            <label className={form__label} htmlFor="email">
              E-mail:
            </label>
            <Field
              className={form__input}
              id="email"
              name="email"
              placeholder="johnrosie@gmail.com"
              type="email"
            />

            <label className={form__label} htmlFor="phone">
              Phone:
            </label>
            <Field
              className={form__input}
              id="phone"
              name="phone"
              placeholder="380961234567"
            />

            <label className={form__label} htmlFor="message">
              Message:
            </label>
            <Field
              as="textarea"
              className={form__input}
              id="message"
              name="message"
              placeholder="Your message"
            />

            <div className={button__wrap}>
              <SecondaryButton type="submit">Send</SecondaryButton>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
