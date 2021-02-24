import React from "react";
import * as yup from "yup";
import { Formik } from "formik";

import { Box, Button, Container, Text, TextInput } from "../../components";
import Checkbox from "../../components/Form/Checkbox";
import SocialLogin from "../components/SocialLogin";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(6, "Too short").required("Required"),
});

export default function Login() {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => true}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Don`t have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom={"l"}>
          Use your credentials below and login to your account
        </Text>
        <Formik
          initialValues={{ email: "", password: "", remember: false }}
          onSubmit={(values) => console.log(values)}
          validationSchema={LoginSchema}
        >
          {({
            handleChange,
            setFieldValue,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <TextInput
                icon="lock"
                placeholder="Enter your Password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                error={errors.password}
                touched={touched.password}
              />
              <Box
                flexDirection="row"
                justifyContent="space-between"
                paddingVertical="m"
              >
                <Checkbox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
                <Button variant="transparent" onPress={() => true}>
                  <Text color="primary">Forgot password</Text>
                </Button>
              </Box>
              <Box alignItems="center" marginBottom="m">
                <Button
                  variant="primary"
                  onPress={handleSubmit}
                  label="Log into your account"
                  disabled={!isValid}
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
