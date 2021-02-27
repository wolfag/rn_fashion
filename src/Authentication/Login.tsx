import { useFormik } from "formik";
import React, { useRef } from "react";
import * as yup from "yup";
import { TextInput as RNTextInput } from "react-native";

import { Box, Button, Container, Text, TextInput } from "../components";
import Checkbox from "../components/Form/Checkbox";
import { Routes, StackNavigationProps } from "../components/Navigation";

import Footer from "./components/Footer";

const LoginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(6, "Too short").required("Required"),
});

export default function Login({
  navigation,
}: StackNavigationProps<Routes, "Login">) {
  const {
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: { email: "", password: "", remember: false },
    onSubmit: (values) => console.log(values),
    validationSchema: LoginSchema,
  });

  const passwordRef = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Don`t have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom={"l"}>
          Use your credentials below and login to your account
        </Text>

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
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </Box>
          <TextInput
            ref={passwordRef}
            icon="lock"
            placeholder="Enter your Password"
            secureTextEntry={true}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={errors.password}
            touched={touched.password}
            autoCompleteType="password"
            autoCapitalize="none"
            returnKeyType="done"
            onSubmitEditing={() => handleSubmit()}
          />
          <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingVertical="m"
            marginBottom="m"
          >
            <Checkbox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
            <Button
              variant="transparent"
              onPress={() => navigation.navigate("ForgotPassword")}
            >
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
      </Box>
    </Container>
  );
}
