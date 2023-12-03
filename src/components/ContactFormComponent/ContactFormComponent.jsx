import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import style from "./ContactFormComponent.module.css";
import { clsx } from "clsx";

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
    button__wrap,
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
                  className={form__input}
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

              <div className={button__wrap}>
                <SecondaryButton type="submit">Send</SecondaryButton>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

// ===================
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import SecondaryButton from "../SecondaryButton/SecondaryButton";
// import style from "./ContactFormComponent.module.css";

// const Schema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Too Short!")
//     .max(70, "Too Long!")
//     .required("Wrong Fullname"),
//   email: Yup.string().email("Invalid email").required("Wrong Email"),
//   phone: Yup.number().min(7).max(12).required("Wrong Phone"),
// });

// export default function ContactFormComponent() {
//   const { contactForm__wrap, form, form__label, form__input, button__wrap } =
//     style;

//   return (
//     <div className={contactForm__wrap}>
//       <Formik
//         initialValues={{
//           fullName: "",
//           email: "",
//           phone: "",
//           message: "",
//         }}
//         validationSchema={Schema}
//         onSubmit={(value, actions) => {
//           console.log(actions);
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form className={form}>
//             <label className={form__label} htmlFor="fullName">
//               Full name:
//             </label>
//             <Field
//               className={form__input}
//               id="fullName"
//               name="fullName"
//               placeholder="John Rosie"
//             />
//             {errors.name && touched.name ? <div>{errors.name}</div> : null}
//             <ErrorMessage name="fullName" />
//             <label className={form__label} htmlFor="email">
//               E-mail:
//             </label>
//             <Field
//               className={form__input}
//               id="email"
//               name="email"
//               placeholder="johnrosie@gmail.com"
//               type="email"
//             />
//             <label className={form__label} htmlFor="phone">
//               Phone:
//             </label>
//             <Field
//               className={form__input}
//               id="phone"
//               name="phone"
//               placeholder="380961234567"
//               type="number"
//             />
//             <label className={form__label} htmlFor="message">
//               Message:
//             </label>
//             <Field
//               as="textarea"
//               className={form__input}
//               id="message"
//               name="message"
//               placeholder="Your message"
//             />
//             <button className={button__wrap} type="submit">
//               send
//             </button>
//             <div className={button__wrap}>
//               {/* <SecondaryButton type="submit">Send</SecondaryButton> */}
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }
