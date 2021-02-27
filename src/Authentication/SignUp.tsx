import { useFormik } from "formik";
import React, { useRef } from "react";
import * as yup from "yup";
import { TextInput as RNTextInput } from "react-native";

import { Box, Button, Container, Text, TextInput } from "../components";
import { Routes, StackNavigationProps } from "../components/Navigation";

import Footer from "./components/Footer";

const SignUpSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(6, "Too short").required("Required"),
  confirmPassword: yup
    .string()
    .equals([yup.ref("password")], "Password don't match"),
});

export default function SignUp({
  navigation,
}: StackNavigationProps<Routes, "SignUp">) {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    onSubmit: (values) => console.log(values),
    validationSchema: SignUpSchema,
  });

  const passwordRef = useRef<RNTextInput>(null);
  const confirmPasswordRef = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  return (
    <Container pattern={1} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom={"l"}>
          Let`s us know what your name, email, and your password
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
          <Box marginBottom="m">
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
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={confirmPasswordRef}
              icon="lock"
              placeholder="Confirm Password"
              secureTextEntry={true}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              autoCompleteType="password"
              autoCapitalize="none"
              returnKeyType="done"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginBottom="m">
            <Button
              variant="primary"
              onPress={handleSubmit}
              label="Create your account"
              disabled={!isValid}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
