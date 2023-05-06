import * as React from "react";
import Header from "../Payment/Header";
import Box from "@mui/material/Box";
import * as formik from "formik";
import * as yup from "yup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./payment-style.css";

const Settings = () => {
  // validation
  const { Formik } = formik;
  const schema = yup.object().shape({
    CardName: yup.string().required(),
    CardNumber: yup
      .string()
      .matches(/[0-9]/, "Card number is not valid")
      .min(16, "Card Number must be 16 characters")
      .max(16, "Card Number must be 16 characters")
      .required(),
    ExpiryDate: yup.string().required(),
    CVV: yup
      .string()
      .min(3, "CVV code must be 3 characters long")
      .max(3, "CVV code must be 3 characters long")
      .matches(/[0-9]/, "CVV code requires numbers")
      .required(),
  });

  return (
    <Box m="0.0rem 0.0rem">
      <Header
        title="PAYMENT"
        subtitle="Pay for your package here and experience the ultimate in convenience and comfort on your trip."
      />
      <br />
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          CardName: "",
          CardNumber: "",
          ExpiryDate: "",
          CVV: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label className="fromLabel">Name on card</Form.Label>
                <Form.Control
                  type="text"
                  name="CardName"
                  placeholder="Ex: A.B.C.Perera"
                  value={values.CardName}
                  onChange={handleChange}
                  isInvalid={!!errors.CardName}
                  required
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Lucida Sans",
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.CardName}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label className="fromLabel">Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: 4215896300000000"
                  name="CardNumber"
                  value={values.CardNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.CardNumber}
                  required
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Lucida Sans",
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.CardNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik03">
                <Form.Label className="fromLabel">Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  name="ExpiryDate"
                  placeholder="MM/YYYY"
                  value={values.ExpiryDate}
                  onChange={handleChange}
                  isInvalid={!!errors.ExpiryDate}
                  required
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Lucida Sans",
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.ExpiryDate}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik04">
                <Form.Label className="fromLabel">CVV Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last three digits on signature strip"
                  name="CVV"
                  value={values.CVV}
                  onChange={handleChange}
                  isInvalid={!!errors.CVV}
                  required
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Lucida Sans",
                  }}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.CVV}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <button
              type="submit"
              class="btn2 btn-light"
              style={{
                fontSize: "1rem",
                fontFamily: "Lucida Sans",
              }}
            >
              PAY NOW
            </button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Settings;
